import os
import os.path
import re
import sys

import yaml
import json
import jinja2

import logging

sys.path.insert(0, '.')
import ecczoogen
ecczoogen.setup_logging(level=logging.INFO)

from ecczoogen import zoo, htmlpagecollectiongen, sitegenerationenvironment, server

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


with open(args.eczoo_site_setup, encoding='utf-8') as f:
    eczoo_site_setup = yaml.safe_load(f)

#logger.debug(f"Read setup file:\n{json.dumps(eczoo_site_setup,indent=4)}")

#
# Fixed paths
#

_root_dir = os.path.abspath(eczoo_site_setup['dirs']['root_dir'])

class Dirs:
    root_dir = _root_dir

    codes_dir = os.path.join(_root_dir, eczoo_site_setup['dirs']['codes_dir'])

    output_dir = os.path.join(_root_dir, eczoo_site_setup['dirs']['output_dir'])

    # dirs for specific types of source files:

    templates_dir = os.path.join(_root_dir, 'templates')
    pages_dir = os.path.join(_root_dir, 'templates', 'pages')

    schemas_dir = os.path.join(_root_dir, 'schemas')

    stylesheets_dir = os.path.join(_root_dir, 'stylesheets')
    javascripts_dir = os.path.join(_root_dir, 'javascripts')

    static_assets_dir = os.path.join(_root_dir, 'static_assets')


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

zoo = zoo.Zoo(dirs=Dirs)


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


################################################################################

#
# Our HtmlPageCollection that will handle generating the pages for codes
#

htmlpgcoll = htmlpagecollectiongen.HtmlPageCollection(
    zoo,
    site_gen_env,
)

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
            'page_title': htmlpgcoll.minilatex_to_html(code.name),
            'page_title_text': code.name,
        },
        code_id_list=[ code_id ],
        context={
            'code': code,
        },
        template_name='dyn_pages/code_page.html',
        link_to_codes_here=True,
    )

    htmlpgcoll.create_page( page )


#
# Now construct the domain & kingdom pages.
#

# The list of domains and associated kingdoms.  This data tree will use the YAML
# data, and it will add some more information to the bare YML data tree
# (e.g. pointers to code objects)
eczoo_domains = eczoo_site_setup['code_tree']['domains']

for domain in eczoo_domains:
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
                'page_title': htmlpgcoll.minilatex_to_html(kingdom['name']),
                'page_title_text': kingdom['name'],
            },
            code_id_list=sorted_code_id_list,
            context={
                'kingdom': htmlpgcoll.wrap_object_with_minilatex_properties(kingdom),
                'domain': htmlpgcoll.wrap_object_with_minilatex_properties(domain),
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
            'page_title': htmlpgcoll.minilatex_to_html(domain['name']),
            'page_title_text': domain['name'],
        },
        code_id_list=[ ],
        context={
            'domain': htmlpgcoll.wrap_object_with_minilatex_properties(domain),
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
            for code in sorted(zoo.all_codes().values(), key=lambda code: code.name)
        ],
        template_name='dyn_pages/code_list.html',
    )
)


################################################################################

#
# Prepare any global context for the templates
#

global_context = {
    'domains': htmlpgcoll.wrap_object_with_minilatex_properties(eczoo_domains),
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
]

for root_js, root_js_out in root_js_list:

    site_gen_env.copy_file(
        source_dir=Dirs.javascripts_dir,
        fn_source=root_js,
        fn_target=os.path.join(output_js_prefix, root_js_out)
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
        eczoo_domains=eczoo_domains,
        htmlpagescollection=htmlpgcoll,
        global_context=global_context,
    )

    pg.generate()


################################################################################

#
# generate the pages with the codes
#

logger.info("Generating code pages ...")

htmlpgcoll.generate(
    output_dir=Dirs.output_dir,
    additional_context=global_context
)



################################################################################

#
# generate a JSON dump of all codes (for editor page)
#

logger.info("Generating JSON code dump ...")

all_codes_info = { code_id: codeobj._info
                   for code_id, codeobj in zoo.all_codes().items() }
with open(os.path.join(Dirs.output_dir, 'all_codes_info_dump.json'), 'w', encoding='utf-8') as fw:
    json.dump(all_codes_info, fw)


################################################################################

logger.info("Done!")
