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
    eczllm,
    server,
    citationmanager,
    searchindexgen,
    schemaloader,
    schemadata,
    inspectimagefile,
)

logger = logging.getLogger()

from llm.fragmentrenderer.text import TextFragmentRenderer


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
    logging.getLogger('llm').setLevel(logging.INFO)


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

    code_tree_info = os.path.join(_root_dir, eczoo_site_setup['dirs']['code_tree_info'])

    contributors = os.path.join(_root_dir, eczoo_site_setup['dirs']['contributors'])

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
# Tools that we'll need all along the build process
#

schema_loader = schemaloader.SchemaLoader(schemas_dir=Dirs.schemas_dir)


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
# The Latex-Like Markup (LLM) environment
#

eczllm_environment = eczllm.EczLLMEnvironment(
    figure_filename_extensions=eczoo_site_setup['image_filename_extensions'],
)


eczllm_scanner = eczllm.NodeScanner()



################################################################################

#
# Build the Code Collection --> create a `ecczoogen.zoo` object
#

zoo = zoo.Zoo(dirs=Dirs, schema_loader=schema_loader,
              eczllm_environment=eczllm_environment)



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
    site_generation_environment=site_gen_env,
    eczllm_environment=eczllm_environment,
    zoo=zoo
)


eczllm_environment.set_htmlpgcollection_zoo(htmlpgcoll, zoo)


################################################################################

#
# Search index scanner and generator
#

search_index_generator = searchindexgen.SearchIndexGenerator()


################################################################################

#
# The citations manager.
#

with open(os.path.join(Dirs.citation_extras, 'citations_hints.yml'), encoding='utf-8') as f:
    citation_hints = yaml.safe_load(f)

citation_manager = citationmanager.CitationTextManager(
    citation_hints,
    eczllm_environment=eczllm_environment,
)


eczllm_environment.set_citationsmanager(citation_manager)


################################################################################

logger.info("Setting up code pages ...")

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
            'page_title_text': code.name.render_standalone(TextFragmentRenderer()),
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


logger.info("Setting up domain/kingdom pages ...")

#
# Now construct the domain & kingdom pages.
#

# The list of domains and associated kingdoms.  This data tree will use the YAML
# data, and it will add some more information to the bare YAML data tree
# (e.g. pointers to code objects)

domainshierarchy_full_schema = schema_loader.get_full_schema('domainshierarchy')

with open(os.path.join(Dirs.code_tree_info, 'domainshierarchy.yml'), encoding='utf-8') as f:
    domainshierarchy_source_data = yaml.safe_load(f)

eczoo_domainshierarchy = schemadata.SchemaData(
    domainshierarchy_source_data,
    domainshierarchy_full_schema,
    what="<eczoo_domainshierarchy>",
    llm_environment=eczllm_environment,
    llm_resource_info=eczllm_environment.make_resource_info(
        resource_type='domainshierarchy',
        resource_id='0',
    )
)

eczllm_scanner.scan_schemadatalike_obj(eczoo_domainshierarchy)


for domain in eczoo_domainshierarchy['domains']:
    domain_id = domain['domain_id']
    domain_name = domain['name']

    kingdoms = domain['kingdoms']

    logger.debug(f"Processing domain ‘{domain_id}’ (‘{domain_name}’)")

    # Create a page for each kingdom of that domain.
    for kingdom in kingdoms:
        code = zoo.get_code(kingdom['code_id'])
        kingdom['code'] = code

        kingdom_code_id = code.code_id

        logger.debug(f"processing kingdom with code_id ‘{kingdom_code_id}’ "
                     f"(‘{kingdom['name']}’), in domain ‘{domain_id}‘")

        sorted_code_list = list(
            sorted(zoo.get_code_family_tree(kingdom_code_id),
                   key=lambda code: code.family_generation_level)
        )

        kingdom['code_list'] = sorted_code_list
        sorted_code_id_list = [ c.code_id for c in sorted_code_list ]

        # create kingdom page.
        kingdom_page = htmlpagecollectiongen.HtmlPage(
            name=f'kingdom/{kingdom_code_id}',
            info={
                'page_title': kingdom['name'],
                'page_title_text': kingdom['name'].render_standalone(TextFragmentRenderer()),
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
        #logger.debug(f"kingdom page created (‘{kingdom_code_id}’)")

    # create domain page.
    domain_page = htmlpagecollectiongen.HtmlPage(
        name=f'domain/{domain_id}',
        info={
            'page_title': domain['name'],
            'page_title_text': domain['name'].render_standalone(TextFragmentRenderer()),
        },
        code_id_list=[ ],
        context={
            'domain': domain,
        },
        template_name='dyn_pages/domain_page.html',
    )

    domain['htmlpage'] = domain_page

    htmlpgcoll.create_page( domain_page )


logger.info("Setting up code list pages ...")

#
# Create a code index page with ALL codes in a single page.
#

codelistpage_full_schema = schema_loader.get_full_schema('codelistpage')

codelistpages_dir = os.path.join(Dirs.code_tree_info, 'codelistpages')

os.makedirs(os.path.join(Dirs.output_dir, 'list'), exist_ok=True)


codelistpage_list = []
codelistpages_by_list_id = {}

for (dirpath, dirnames, filenames) in os.walk(codelistpages_dir, followlinks=True):
    show_dirpath = os.path.relpath(dirpath)
    logger.info(f"Scanning for code list page YAML files (.yml) in ‘{show_dirpath}’ ...")

    for filename in filenames:

        if not filename.endswith(".yml"):
            logger.debug(f"Skipping file {filename} which is not a .yml file")
            continue

        fullfname = os.path.join(dirpath, filename)
        relfname = os.path.relpath(fullfname, codelistpages_dir)

        try:
            with open(fullfname, encoding='utf-8') as f:
                ydata = yaml.safe_load(f)
        except Exception as e:
            logger.critical(
                f"Failed to load code list page YAML file {fullfname}: {e}"
            )
            raise
                
        codelistpage_sd = schemadata.SchemaData(
            ydata,
            codelistpage_full_schema,
            what=f'codelistpage ‘{filename}’',
            llm_environment=eczllm_environment,
            llm_resource_info=eczllm_environment.make_resource_info(
                resource_type='codelistpage',
                resource_id=ydata['list_id'],
            ),
        )

        eczllm_scanner.scan_schemadatalike_obj(codelistpage_sd)

        domains_by_domainid = {
            domain['domain_id']: domain
            for domain in eczoo_domainshierarchy['domains']
        }

        # resolve code list, prepare all codes
        def _code_select_predicate(code, predinfo):
            if 'not' in predinfo:
                if _code_select_predicate(code, predinfo['not']):
                    logger.debug(
                      f"Code {code.code_id} fails to obey (NOT {predinfo['not']})")
                    return False
            if 'property_set' in predinfo:
                if not code.getfield(predinfo['property_set']):
                    logger.debug(
                      f"Code {code.code_id} does not have property {predinfo['property_set']}")
                    return False
            if 'domain' in predinfo:
                if not code.is_in_domain(domains_by_domainid[predinfo['domain']]):
                    logger.debug(f"Code {code.code_id} is not in domain {predinfo['domain']}")
                    return False
            if 'descendant_of' in predinfo:
                if not code.is_descendant_of(predinfo['descendant_of']):
                    logger.debug(
                        f"Code {code.code_id} is not descendant of {predinfo['descendant_of']}")
                    return False
            if 'cousin_of' in predinfo:
                if not code.is_cousin_of(predinfo['cousin_of']):
                    logger.debug(
                        f"Code {code.code_id} is not cousin of {predinfo['cousin_of']}")
                    return False
            if 'manual_code_list' in predinfo:
                if code.code_id not in predinfo['manual_code_list']:
                    logger.debug(
                        f"Code {code.code_id} is not one of {predinfo['manual_code_list']}")
                    return False
            return True

        def _code_select_predicates(code, preds_info):
            for pred in preds_info:
                if _code_select_predicate(code, pred):
                    return True
            return False

        def _llm_as_text(s):
            return eczllm.render_as_text(s, eczllm_environment)

        list_of_codes = [
            code
            for code in zoo.all_codes().values()
            if _code_select_predicates(code, codelistpage_sd['codes']['select'])
        ]
        sort_by = codelistpage_sd.getfield('sort.by', 'name')
        reverse = codelistpage_sd.getfield('sort.reverse', False)
        list_of_codes.sort(
            key=lambda code: _llm_as_text(code.getfield(sort_by)),
            reverse=reverse,
        )

        codepagelistdisplaystyle = codelistpage_sd.getfield('display.style', 'cards')
        templatename = f'dyn_pages/codelistpage_style_{codepagelistdisplaystyle}.html'

        listpageid = codelistpage_sd['list_id']
        if codelistpage_sd['list_id_root']:
            pass
        else:
            listpageid = f'list/{listpageid}'

        htmlpage = htmlpagecollectiongen.HtmlPage(
            name=listpageid,
            info={
                'page_title': codelistpage_sd['title'],
                'page_title_text': codelistpage_sd['title'].render_standalone(TextFragmentRenderer()),
                'codelistpage_data': codelistpage_sd,
                'display_options': codelistpage_sd.subobject('display.options'),
            },
            code_id_list=[
                code.code_id
                for code in list_of_codes
            ],
            template_name=templatename,
        )
        htmlpgcoll.create_page( htmlpage )

        list_id = codelistpage_sd['list_id']
        codelistpage_info = {
            'list_id': list_id,
            'path': htmlpage.path(),
            'title': codelistpage_sd['title'],
            'codelistpage_data': codelistpage_sd,
            'source_info_filename': relfname,
        }
        codelistpage_list.append(codelistpage_info)
        codelistpages_by_list_id[ list_id ] = codelistpage_info


codelistpage_list.sort(
    key=lambda x: (True if x['codelistpage_data']['list_id_root'] else False, x['list_id'])
)


################################################################################

#
# Prepare any global context for the templates
#


# Load the list of site contributors
contributors_yml_fname = os.path.join(Dirs.contributors, 'contributors.yml')
with open(contributors_yml_fname, encoding='utf-8') as f:
    zoo_contributors_info = yaml.safe_load(f)


global_context = {
    'domains': eczoo_domainshierarchy['domains'],
    'zoo': zoo,
    'codelistpage_list': codelistpage_list,
    'zoo_contributors_info': zoo_contributors_info,
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
    #('edit_code.js', 'edit_code.js'),
    ('mathjaxinit.js', 'mathjaxinit.js'),
    ('canvas2svg.js', 'canvas2svg.js'),
    ('cytoscape-svg.js', 'cytoscape-svg.js'),
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

#
# Scan codes' information for citations, and build the bibliography.
#

logger.info("Scanning LLM code for external resources ...")

for code_id, code in zoo.all_codes().items():
    
    eczllm_scanner.scan_schemadatalike_obj(code, what=f"<code {code.code_id}>")


################################################################################

#
# Copy the figure files to the output.
#

logger.info("Copying image files ...")

fig_exts = eczoo_site_setup['image_filename_extensions']

figsdb = {}

output_fig_prefix = 'fig'
os.makedirs(os.path.join(Dirs.output_dir, output_fig_prefix), exist_ok=True)

for encountered_image_filename in eczllm_scanner.get_encountered_image_filenames():

    resource_info = encountered_image_filename.encountered_resource_info
    image_filename = encountered_image_filename.image_filename

    if (resource_info, image_filename) in figsdb:
        # already got this figure (how is this possible ?)
        continue

    if resource_info is None:
        logger.warning(f"Can't handle {encountered_image_filename=}, resource_info is None")
        raise ValueError("I don't know what to do with a resource present "
                         "in this LLM string, because resource_info is None!")

    if resource_info.resource_type == 'code':
        code_id = resource_info.resource_id
        code = zoo.get_code(code_id)
        full_path = os.path.join(
            Dirs.codes_dir,
            os.path.dirname(code.source_info_filename),
            image_filename
        )
    elif resource_info.resource_type == 'domainshierarchy':
        full_path = os.path.join(Dirs.code_tree_info, image_filename)
    elif resource_info.resource_type == 'codelistpage':
        list_id = resource_info.resource_id
        full_path = os.path.join(
            Dirs.code_tree_info,
            'codelistpages',
            os.path.dirname(codelistpages_by_id[list_id]['source_info_filename']),
            image_filename
        )
    else:
        raise ValueError(
            f"Unknown resource_parent_type for finding figures:"
            f"{resource_parent_type} in {resource_parent_id}"
        )

    ext = ''
    for ext in fig_exts:
        full_path_wext = full_path + ext
        if os.path.exists(full_path_wext):
            break
    else:
        raise ValueError(
            f"Cannot find image file {full_path}, tried extentions {fig_exts}")

    with open(full_path_wext, 'rb') as fb:
        hx = hashlib.sha256()
        while True:
            data = fb.read(2048)
            if not data:
                break
            hx.update(data)
        image_file_hexdigest = hx.hexdigest()

    ofigname = image_file_hexdigest[:32]

    # pick up the extension again, in case it was already in full_path
    _, ext = os.path.splitext(full_path_wext)
    ofigname = ofigname + ext

    site_gen_env.copy_file(
        source_dir=None,
        fn_source=full_path_wext,
        fn_target=os.path.join(output_fig_prefix, ofigname)
    )

    image_info = dict(inspectimagefile.get_image_file_info(full_path_wext))

    figsdb[(resource_info, image_filename)] = {
        'path': output_fig_prefix + '/' + ofigname,
        'image_info': image_info,
    }



htmlpgcoll.set_image_filename_database( figsdb )


################################################################################

#
# Build the bibliography.
#

logger.info("Generating citation database ...")

encountered_citations = eczllm_scanner.get_encountered_citations()
logger.debug("Encountered citations = %r", encountered_citations)
for c in encountered_citations:
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


################################################################################

#
# some final checks
#

htmlpgcoll.finished()


################################################################################

#
# generate the pages with the codes
#

logger.info("Generating code pages ...")

htmlpgcoll.generate(
    zoo=zoo,
    output_dir=Dirs.output_dir,
    additional_context=global_context,
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
        eczllm_environment=eczllm_environment,
    )

    pg.generate()



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
    if hasattr(obj.data, 'llm_text'):
        return obj.data.llm_text
    return obj.data

all_codes_info = { code_id: _get_schemadata_properties_as_json_tree(codeobj.schemadata)
                   for code_id, codeobj in zoo.all_codes().items() }
with open(os.path.join(Dirs.output_dir, 'dat', 'all_codes_info_dump.json'), 'w',
          encoding='utf-8') as fw:
    json.dump(all_codes_info, fw)

search_index_data = search_index_generator.generate_search_index(
    eczllm_environment=eczllm_environment
)
with open(os.path.join(Dirs.output_dir, 'dat', 'search_index_store.json'), 'w',
          encoding='utf-8') as fw:
    json.dump(search_index_data, fw)


################################################################################

logger.info("Done!")
