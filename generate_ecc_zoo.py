import os
import os.path
import re
import sys
import hashlib

import yaml
import json
import jinja2

import logging

sys.path.insert(0, '.')
import ecczoogen
ecczoogen.setup_logging(level=logging.INFO)

import requests

from ecczoogen import (
    zoo,
    htmlpagecollectiongen,
    sitegenerationenvironment,
    server,
    minilatexscanner,
    citationmanager,
    searchindexgen,
    schemaloader,
    schemadata,
    inspectimagefile,
)

logger = logging.getLogger()


#
# Support argument "--verbose"
#
import argparse
args_parser = argparse.ArgumentParser()
args_parser.add_argument("--verbose", action='store_true', default=False,
                         help="Print out more information")

args_parser.add_argument("--eczoo-site-setup", action='store',
                         default='./eczoo_site_setup.yml',
                         help="Specify alternative settings file instead "
                         "of ‘./eczoo_site_setup.yml’")

args_parser.add_argument("--skip-citation-cache", action='store_true', default=False,
                         help="Do not read any citation caches and force fetching "
                         "all citation information from arXiv (arXiv ID) or "
                         "crossref.org (DOI)")

args_parser.add_argument("--run-server", action='store_true', default=False,
                         help="Run the test server")
args_parser.add_argument("--run-server-host", action='store',
                         default='',
                         help="Host interface on which to serve (e.g. localhost)")
args_parser.add_argument("--run-server-port", action='store', default=8000, type=int,
                         help="Port to listen on for the test server (e.g. 8000)")
args = args_parser.parse_args()
if args.verbose:
    logger.setLevel(logging.DEBUG)
    logging.getLogger('pylatexenc').setLevel(logging.INFO)


with open(args.eczoo_site_setup, encoding='utf-8') as f:
    eczoo_site_setup = yaml.safe_load(f)

#logger.debug(f"Read setup file:\n{json.dumps(eczoo_site_setup,indent=4)}")

#
# Fixed paths
#

_root_dir = os.path.abspath(eczoo_site_setup['dirs']['root_dir'])

class Dirs:
    root_dir = _root_dir

    #
    # dirs for reading data that will be used to populate the zoo
    #

    codes_dir = os.path.join(_root_dir, eczoo_site_setup['dirs']['codes_dir'])

    citation_extras = os.path.join(_root_dir, eczoo_site_setup['dirs']['citation_extras'])

    #
    # Where to output the website files:
    #

    output_dir = os.path.join(_root_dir, eczoo_site_setup['dirs']['output_dir'])

    #
    # Where to find various template resources and web components in order to
    # build the website:
    #

    templates_dir = os.path.join(_root_dir, 'templates')
    pages_dir = os.path.join(_root_dir, 'templates', 'pages')

    schemas_dir = os.path.join(_root_dir, 'schemas')

    stylesheets_dir = os.path.join(_root_dir, 'stylesheets')
    javascripts_dir = os.path.join(_root_dir, 'javascripts')

    jscomponents_dir = os.path.join(_root_dir, 'jscomponents')

    static_assets_dir = os.path.join(_root_dir, 'static_assets')
    static_favicon_files_dir = os.path.join(_root_dir, 'static_favicon_files')


logger.debug(f"Set up directory paths:\n  {Dirs.root_dir=}\n"
             f"  {Dirs.codes_dir=}\n  {Dirs.output_dir=}")

if not os.path.exists(Dirs.output_dir):
    os.makedirs(Dirs.output_dir)



################################################################################

#
# If a server was requested, don't generate the site but simply serve the
# existing output site.
#

if args.run_server:
    server.serve(Dirs.output_dir, args.run_server_host, args.run_server_port)
    sys.exit(0)



################################################################################

#
# Build the Code Collection --> create a `ecczoogen.zoo` object
#

zoo = zoo.Zoo(dirs=Dirs, fig_exts=eczoo_site_setup['image_filename_extensions'])


################################################################################

logger.info("Setting up the jinja2 template environment ...")

#
# Set up an environment for generating the HTML pages with our HTML templates
#

site_gen_env = sitegenerationenvironment.SiteGenerationEnvironment(
    # Jinja2 stuff:
    jinja2env=jinja2.Environment(
        loader=jinja2.FileSystemLoader(Dirs.templates_dir),
        autoescape=jinja2.select_autoescape(['html', 'xml']),
        trim_blocks=True,
        lstrip_blocks=True,
    ),
    # my stuff:
    dirs=Dirs,
    base_url='/',
)



################################################################################

#
# Copy static assets that the site might need
# Compile special pages (like the pretty code graph)
#

logger.info("Copying static assets ...")

static_asset_exts = ('.html', '.css', '.js', '.svg', '.png', '.jpg', '.jpeg')

site_gen_env.copy_tree(
    source_dir=Dirs.static_assets_dir,
    target_dir='static/',
    only_exts=static_asset_exts,
)

# also take care of favicon
site_gen_env.copy_tree(
    source_dir=Dirs.static_favicon_files_dir,
    target_dir='', # root of output directory
    only_exts=('.png', '.svg', '.ico', '.xml', '.webmanifest',)
)


################################################################################

#
# Our HtmlPageCollection that will handle generating the pages for codes
#

htmlpgcoll = htmlpagecollectiongen.HtmlPageCollection(
    zoo,
    site_gen_env,
)


search_index_generator = searchindexgen.SearchIndexGenerator()


################################################################################

logger.info("Setting up ecc list pages ...")

#
# Set up the individual code pages for the site -- i.e., here, we do one page
# per code.  These pages are where the "permalink" for the code should point to.
#

for code_id, code in zoo.all_codes().items():

    # page for this specific code
    page = htmlpagecollectiongen.HtmlPage(
        name=f'c/{code_id}',
        info={
            'page_title': code.name,
            'page_title_text': code.name.text,
        },
        code_id_list=[ code_id ],
        context={
            'code': code,
        },
        template_name='dyn_pages/code_page.html',
        link_to_codes_here=True,
    )

    htmlpgcoll.create_page( page )

    search_index_generator.add_code_page(code, page.path())


#
# Now construct the domain & kingdom pages.
#

# The list of domains and associated kingdoms.  This data tree will use the YAML
# data, and it will add some more information to the bare YML data tree
# (e.g. pointers to code objects)

schema_loader = schemaloader.SchemaLoader(schemas_dir=Dirs.schemas_dir)
domainshierarchy_full_schema = schema_loader.get_full_schema('domainshierarchy')

eczoo_domainshierarchy = schemadata.SchemaData(
    eczoo_site_setup['code_tree'],
    domainshierarchy_full_schema,
    what="<eczoo_domainshierarchy>",
)


for domain in eczoo_domainshierarchy['domains']:
    domain_id = domain['domain_id']
    domain_name = domain['name']

    kingdoms = domain['kingdoms']

    logger.debug(f"Processing domain ‘{domain_id}’ (‘{domain_name}’)")

    # Create a page for each kingdom of that domain.
    for kingdom in kingdoms:
        code = zoo.get_code(kingdom['code_id'])
        kingdom['code'] = code

        root_code_id = code.code_id

        logger.debug(f"processing kingdom with code_id ‘{root_code_id}’ "
                     f"(‘{kingdom['name']}’), in domain ‘{domain_id}‘")

        sorted_code_list = list(
            sorted(zoo.get_code_family_tree(root_code_id),
                   key=lambda code: code.family_generation_level)
        )

        kingdom['code_list'] = sorted_code_list
        sorted_code_id_list = [ c.code_id for c in sorted_code_list ]

        # create kingdom page.
        kingdom_page = htmlpagecollectiongen.HtmlPage(
            name=f'kingdom/{root_code_id}',
            info={
                'page_title': kingdom['name'],
                'page_title_text': kingdom['name'].text,
            },
            code_id_list=sorted_code_id_list,
            context={
                'kingdom': kingdom,
                'domain': domain,
            },
            template_name='dyn_pages/kingdom_page.html',
        )

        kingdom['htmlpage'] = kingdom_page

        htmlpgcoll.create_page( kingdom_page )
        #
        #logger.debug(f"kingdom page created (‘{root_code_id}’)")

    # create domain page.
    domain_page = htmlpagecollectiongen.HtmlPage(
        name=f'domain/{domain_id}',
        info={
            'page_title': domain['name'],
            'page_title_text': domain['name'],
        },
        code_id_list=[ ],
        context={
            'domain': domain, #htmlpgcoll.wrap_object_with_minilatex_properties(domain),
        },
        template_name='dyn_pages/domain_page.html',
    )

    domain['htmlpage'] = domain_page

    htmlpgcoll.create_page( domain_page )



#
# Create a code index page with ALL codes in a single page.
#

htmlpgcoll.create_page(
    htmlpagecollectiongen.HtmlPage(
        name='all',
        info={
            'page_title': 'Index of all codes',
        },
        code_id_list=[
            code.code_id
            for code in sorted(zoo.all_codes().values(),
                               key=lambda code: code.name.text)
        ],
        template_name='dyn_pages/code_index.html',
    )
)


################################################################################

#
# Prepare any global context for the templates
#

global_context = {
    'domains': eczoo_domainshierarchy['domains'],
    'zoo': zoo,
}


################################################################################

#
# Copy our javascripts in
#

logger.info("Inculding javascripts ...")

output_js_prefix = 'js'
os.makedirs(os.path.join(Dirs.output_dir, output_js_prefix), exist_ok=True)

root_js_list = [
    ('misc.js', 'misc.js'),
    ('edit_code.js', 'edit_code.js'),
    ('mathjaxinit.js', 'mathjaxinit.js'),
]

for root_js, root_js_out in root_js_list:

    site_gen_env.copy_file(
        source_dir=Dirs.javascripts_dir,
        fn_source=root_js,
        fn_target=os.path.join(output_js_prefix, root_js_out)
    )


logger.info("Inculding javascripts from jscomponents ...")

jscomponents_dist_dir = os.path.join(Dirs.jscomponents_dir, 'dist')
for jsname in os.listdir(jscomponents_dist_dir):
    if not jsname.endswith('.js'):
        logger.debug(f"Skipping non-JS file ‘{jsname}’")
        continue

    site_gen_env.copy_file(
        source_dir=jscomponents_dist_dir,
        fn_source=jsname,
        fn_target=os.path.join(output_js_prefix, jsname)
    )



################################################################################

logger.info("Compiling stylesheets ...")

#
# Compile the stylesheet(s)
#

output_css_prefix = 'css'
os.makedirs(os.path.join(Dirs.output_dir, output_css_prefix), exist_ok=True)

root_scss_list = [
    ('main.scss', 'main.css'),
]

for root_scss, root_css in root_scss_list:

    site_gen_env.compile_sass(
        source_dir=Dirs.stylesheets_dir,
        fn_source=root_scss,
        fn_output=os.path.join(output_css_prefix, root_css)
    )


################################################################################

logger.info("Copying the data schemas (YAML → JSON) ...")

#
# Copy in the schemas
#

output_schemas_prefix = 'schemas'
os.makedirs(os.path.join(Dirs.output_dir, output_schemas_prefix), exist_ok=True)

_rx_yml = re.compile(r'\.ya?ml$', flags=re.IGNORECASE)
def compile_yml_to_json(fn_source, fn_dest):

    m = _rx_yml.search(fn_source)
    if m is None:
        # not a YAML file, skipping file
        return

    if os.path.isdir(fn_dest):
        fn_dest = os.path.join(fn_dest, os.path.basename(fn_source))

    fn_dest_json = _rx_yml.sub('.json', fn_dest)

    logger.debug(f"Copying/compiling ‘{fn_source}’ → ‘{fn_dest_json}’")

    with open(fn_source, encoding='utf-8') as f:
        data = yaml.safe_load(f)

    with open(fn_dest_json, 'w', encoding='utf-8') as fw:
        json.dump(data, fw)


site_gen_env.compile_tree(
    source_dir=Dirs.schemas_dir,
    target_dir=output_schemas_prefix,
    compile_function=compile_yml_to_json
)


################################################################################

logger.info("Compiling global pages ...")

#
# Compile any global pages, like the index.html or contributions.html page
#
for fn in os.listdir(Dirs.pages_dir):
    if fn.endswith(".html"):
        fn_template = os.path.relpath(os.path.join(Dirs.pages_dir, fn), Dirs.templates_dir)
        site_gen_env.compile_template(
            fn_template=fn_template,
            fn_output=fn,
            context=global_context
        )

################################################################################

logger.info("Compiling special pages ...")

#
# Compile special pages (like the pretty code graph)
#

from special_pages_gen.pretty_code_graph import PagePrettyCodeGraph

special_pages = [ PagePrettyCodeGraph, ]

for SpecialPageClass in special_pages:

    logger.info(f"Compiling special page ‘{SpecialPageClass.__name__}’")

    pg = SpecialPageClass(
        dirs=Dirs,
        site_gen_env=site_gen_env,
        zoo=zoo,
        eczoo_domains=eczoo_domainshierarchy['domains'],
        htmlpagescollection=htmlpgcoll,
        global_context=global_context,
    )

    pg.generate()


################################################################################

#
# Scan codes' information for citations, and build the bibliography.
#

logger.info("Scanning code minilatex for external resources ...")

minilatex_scanner = minilatexscanner.MiniLatexScanner()

for code_id, code in zoo.all_codes().items():
    
    minilatex_scanner.scan_code_obj(code, where=f'<code {code_id}>')


################################################################################

#
# Copy the figure files to the output.
#

logger.info("Copying image files ...")

fig_exts = eczoo_site_setup['image_filename_extensions']

figsdb = {}

output_fig_prefix = 'fig'
os.makedirs(os.path.join(Dirs.output_dir, output_fig_prefix), exist_ok=True)

for encountered_image_filename in minilatex_scanner.get_encountered_image_filenames():
    if encountered_image_filename.encountered_code_id is not None:
        code_id = encountered_image_filename.encountered_code_id
        image_filename = encountered_image_filename.image_filename

        if (code_id, image_filename) in figsdb:
            # already got this figure (how is this possible ?)
            continue

        code = zoo.get_code(code_id)
        full_path = os.path.join(Dirs.codes_dir,
                                 os.path.dirname(code.source_info_filename),
                                 image_filename)

        ext = ''
        for ext in fig_exts:
            full_path_wext = full_path + ext
            if os.path.exists(full_path_wext):
                break
        else:
            raise ValueError(
                f"Cannot find image file {full_path}, tried extentions {fig_exts}")

        ofigname = hashlib.sha256(full_path_wext.encode('utf-8')).hexdigest()[:32]

        # pick up the extension again, in case it was already in full_path
        _, ext = os.path.splitext(full_path_wext)
        ofigname = ofigname + ext

        site_gen_env.copy_file(
            source_dir=None,
            fn_source=full_path_wext,
            fn_target=os.path.join(output_fig_prefix, ofigname)
        )

        image_info = dict(inspectimagefile.get_image_file_info(full_path_wext))

        figsdb[(code_id, image_filename)] = {
            'path': output_fig_prefix + '/' + ofigname,
            'image_info': image_info,
        }

    else:
        # TODO! will we need figures outside code pages?
        raise RuntimeError("please implement me")


htmlpgcoll.set_image_filename_database( figsdb )


################################################################################

#
# Build the bibliography.
#

logger.info("Generating citation database ...")

with open(os.path.join(Dirs.citation_extras, 'citations_hints.yml'), encoding='utf-8') as f:
    citation_hints = yaml.safe_load(f)

citation_manager = citationmanager.CitationTextManager(citation_hints)
for c in minilatex_scanner.get_encountered_citations():
    try:
        citation_manager.add_encountered_citation(c)
    except Exception as e:
        if c.citation_key_prefix is not None:
            full_cit_key = f"{c.citation_key_prefix}:{c.citation_key}"
        else:
            full_cit_key = c.citation_key
        logger.error(f"Invalid citation key ‘{full_cit_key}’ in ‘{c.encountered_where}’:\n"
                     f"{e}")
        raise

cache_citation_fetched_data_filename = 'dat/cache_citation_fetched_data.json'

if not args.skip_citation_cache:

    for path in (Dirs.output_dir, 'https://errorcorrectionzoo.org'):
        cachefile = os.path.join(path, cache_citation_fetched_data_filename)
        logger.debug(f"Try to read cache from ‘{cachefile}’ ...")
        if cachefile.startswith( ('https://', 'http://') ):
            r = requests.get(cachefile)
            if r.status_code == 200:
                r.encoding = 'utf-8'
                try:
                    citation_manager.load_db_json_s(r.text)
                    logger.debug(f"Cache read from ‘{cachefile}’")
                    break
                except Exception as e:
                    logger.info(f"Failed to load cache ‘{cachefile}’: {e!r}")
                    continue
        elif os.path.exists(cachefile):
            with open(cachefile, 'r') as f:
                try:
                    citation_manager.load_db_json(f)
                    logger.debug(f"Cache read from ‘{cachefile}’")
                    break
                except Exception as e:
                    logger.info(f"Failed to load cache ‘{os.path.relpath(cachefile)}’: {e!r}")
                    continue

citation_manager.fetch_citation_info()

output_citation_cache_fetched_data_filename = \
    os.path.join(Dirs.output_dir, cache_citation_fetched_data_filename)

os.makedirs( os.path.dirname(output_citation_cache_fetched_data_filename),
             exist_ok=True )

with open(output_citation_cache_fetched_data_filename, 'w') as fw:
    citation_manager.save_db_json(fw)

citation_manager.build_full_citation_text_database()

htmlpgcoll.set_citation_manager(citation_manager)

################################################################################

#
# generate the pages with the codes
#

logger.info("Generating code pages ...")

htmlpgcoll.generate(
    output_dir=Dirs.output_dir,
    additional_context=global_context,
)



################################################################################

#
# generate a JSON dump of all codes (for editor page)
#

logger.info("Generating JSON code dump ...")

os.makedirs( os.path.join(Dirs.output_dir, 'dat'), exist_ok=True )

def _get_schemadata_properties_as_json_tree(obj):
    if isinstance(obj.data, list):
        return [ _get_schemadata_properties_as_json_tree(o)
                 for o in obj._data_sd ]
    if isinstance(obj.data, dict):
        return { k: _get_schemadata_properties_as_json_tree(o)
                 for k, o in obj._data_sd.items() }
    if hasattr(obj.data, 'text'):
        return obj.data.text
    return obj.data

all_codes_info = { code_id: _get_schemadata_properties_as_json_tree(codeobj.schemadata)
                   for code_id, codeobj in zoo.all_codes().items() }
with open(os.path.join(Dirs.output_dir, 'dat', 'all_codes_info_dump.json'), 'w',
          encoding='utf-8') as fw:
    json.dump(all_codes_info, fw)

with open(os.path.join(Dirs.output_dir, 'dat', 'search_index_store.json'), 'w',
          encoding='utf-8') as fw:
    json.dump(search_index_generator.get_store_dump(), fw)


################################################################################

logger.info("Done!")
