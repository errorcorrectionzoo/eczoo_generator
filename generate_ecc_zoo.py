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

#
# Fixed paths
#

_root_dir = os.path.dirname(__file__)

class Dirs:
    root_dir = _root_dir

    codes_dir = os.path.join(_root_dir, '..', 'eczoo_data', 'codes')

    templates_dir = os.path.join(_root_dir, 'templates')
    pages_dir = os.path.join(_root_dir, 'templates', 'pages')

    schemas_dir = os.path.join(_root_dir, 'schemas')

    stylesheets_dir = os.path.join(_root_dir, 'stylesheets')
    javascripts_dir = os.path.join(_root_dir, 'javascripts')

    static_assets_dir = os.path.join(_root_dir, 'static_assets')

    output_dir = os.path.join(_root_dir, '..', 'eczoo_website')


if not os.path.exists(output_dir):
    os.makedirs(output_dir)



################################################################################

#
# If a server was requested, don't generate the site but simply serve the
# existing output site.
#

if args.run_server:
    server.serve(Dirs.output_dir, args.run_server_host, args.run_server_port)
    sys.exit(0)



################################################################################

logger.info("Building the zoo ...")

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
# Set up the code pages of the site
#

for code_id, code in zoo.all_codes().items():

    # page for this specific code
    page = htmlpagecollectiongen.HtmlPage(
        name=f'code_{code_id}',
        info={
            'page_title': code.name,
        },
        code_id_list=[code_id],
        context={
            'code': code,
        },
        template_name='dyn_pages/code_page.html',
        list_in_sidebar=False,
    )

    htmlpgcoll.create_page( page )


#
# Codes by type of encoding (X into X)
#

# root_codes = [
#     ('qubits_into_qubits', 'Encoding qubits into qubits'),
#     ('qudits_into_qudits', 'Encoding qudits into qudits'),
#     ('oscillators_into_oscillators', 'Encoding oscillators into oscillators'),
#     ('qudits_into_oscillators', 'Encoding qudits into oscillators'),
#     ('q-ary_digits_into_q-ary_digits', 'Encoding q-ary digits into q-ary digits'),
#     ('bits_into_bits', 'Encoding bits into bits'),
# ]
root_codes = [
    (code_id, code.name)
    for (code_id, code) in zoo.root_codes().items()
]

for root_code_id, title in root_codes:

    code_id_list = zoo.get_code_family_tree(root_code_id)

    page = htmlpagecollectiongen.HtmlPage(
        name=root_code_id,
        info={
            'page_title': title,
        },
        code_id_list=code_id_list,
        template_name='dyn_pages/code_list.html',
        link_to_codes_here=False
    )

    htmlpgcoll.create_page( page )


# Code index page

htmlpgcoll.create_page(
    htmlpagecollectiongen.HtmlPage(
        name='all',
        info={
            'page_title': 'Index of all codes',
        },
        code_id_list=zoo.all_codes().keys(),
        template_name='dyn_pages/code_list.html',
        link_to_codes_here=False,
    )
)


################################################################################

#
# Prepare any global context for the templates
#

global_context = {
    'nav_pages': htmlpgcoll.pages.values()
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

    with open(fn_source) as f:
        data = yaml.safe_load(f)

    with open(fn_dest_json, 'w') as fw:
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

logger.info("Done!")
