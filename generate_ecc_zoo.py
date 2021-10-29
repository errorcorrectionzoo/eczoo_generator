import os
import os.path
import re
import sys

import jinja2

import logging

sys.path.insert(0, '.')
import ecczoogen
ecczoogen.setup_logging(level=logging.INFO)

from ecczoogen import zoo, htmlpagecollectiongen, j2_helpers

logger = logging.getLogger()


#
# Support argument "--verbose"
#
import argparse
args_parser = argparse.ArgumentParser()
args_parser.add_argument("--verbose", action='store_true', default=False,
                         help="Print out more information")
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
    stylesheets_dir = os.path.join(_root_dir, 'stylesheets')
    global_pages_dir = os.path.join(_root_dir, 'global_pages')

    static_assets_dir = os.path.join(_root_dir, 'static_assets')

    output_dir = os.path.join(_root_dir, '..', 'eczoo_website')


################################################################################

logger.info("Building the zoo ...")

#
# Build the Code Collection --> create a `ecczoogen.zoo` object
#

zoo = zoo.Zoo(codes_dir=Dirs.codes_dir)


################################################################################

logger.info("Setting up the jinja2 template environment ...")

#
# Set up an environment for generating the HTML pages with our HTML templates
#

jinja2env = j2_helpers.ExtendedJinja2Environment(
    # my stuff:
    dirs=Dirs,
    base_url='/',
    # Jinja2 stuff:
    loader=jinja2.FileSystemLoader(Dirs.templates_dir),
    autoescape=jinja2.select_autoescape(['html', 'xml']),
    trim_blocks=True,
    lstrip_blocks=True,
)




################################################################################

#
# Copy static assets that the site might need
# Compile special pages (like the pretty code graph)
#

logger.info("Copying static assets ...")

static_asset_exts = ('.html', '.css', '.js', '.svg', '.png', '.jpg', '.jpeg')

jinja2env.copy_tree(
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
    jinja2env,
    base_url=jinja2env.base_url
)

################################################################################

logger.info("Setting up ecc list pages ...")

#
# Set up the code pages of the site
#

for code_id, code in zoo.all_codes().items():

    page = htmlpagecollectiongen.HtmlPage(
        name='code_'+code_id,
        info={
            'page_title': code.name
        },
        code_id_list=[code_id],
        template_name='page_code_list.html',
        list_in_sidebar=False
    )

    htmlpgcoll.create_page( page )


#
# Codes by type of encoding (X into X)
#

root_codes = [
    ('qubits_into_qubits', 'Encoding qubits into qubits'),
    ('qudits_into_qudits', 'Encoding qudits into qudits'),
    ('oscillators_into_oscillators', 'Encoding oscillators into oscillators'),
    ('qudits_into_oscillators', 'Encoding qudits into oscillators'),
    ('q-ary_digits_into_q-ary_digits', 'Encoding q-ary digits into q-ary digits'),
    ('bits_into_bits', 'Encoding bits into bits'),
]

for root_code_id, title in root_codes:

    code_id_list = zoo.get_code_family_tree(root_code_id)

    page = htmlpagecollectiongen.HtmlPage(
        name=root_code_id,
        info={
            'page_title': title
        },
        code_id_list=code_id_list,
        template_name='page_code_list.html',
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
        template_name='page_code_list.html',
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

    jinja2env.compile_sass(
        source_dir=Dirs.stylesheets_dir,
        fn_source=root_scss,
        fn_output=os.path.join(output_css_prefix, root_css)
    )


################################################################################

logger.info("Compiling global pages ...")

#
# Compile any global pages, like the index.html or contributions.html page
#
for fn in os.listdir(Dirs.global_pages_dir):
    if fn.endswith(".html"):
        jinja2env.compile_single_template(
            source_dir=Dirs.global_pages_dir,
            fn_template=fn,
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
        jinja2env=jinja2env,
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
