import os
import os.path
import re
import sys

import jinja2

import logging

sys.path.insert(0, '.')
import ecczoogen
ecczoogen.setup_logging(level=logging.DEBUG)

from ecczoogen import zoo, htmlpagecollectiongen, j2_helpers

logger = logging.getLogger()

#
# Fixed paths
#

class Dirs:
    codes_dir = os.path.join(os.path.dirname(__file__), 'scratch-example-codes')

    templates_dir = os.path.join(os.path.dirname(__file__), 'templates')
    stylesheets_dir = os.path.join(os.path.dirname(__file__), 'stylesheets')
    global_pages_dir =os.path.join(os.path.dirname(__file__), 'global_pages')

    static_assets_dir =os.path.join(os.path.dirname(__file__), 'static_assets')

    output_dir = os.path.join(os.path.dirname(__file__), 'out')


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
# Set up the pages of the site
#


# TODO: in the future, we could automatically generate all the different
#       combinations of physical/logical spaces.


#
# A page for qubits->qubits codes
#
htmlpgcoll.create_page(
    htmlpagecollectiongen.HtmlPage(
        name='qubits_to_qubits',
        info={
            'page_title': 'Encoding qubits into qubits'
        },
        code_id_list=zoo.get_code_ids_by_physical_logial('qubits', 'qubits'),
        template_name='page_code_list.html'
    )
)

#
# A page for bits->bits codes
#
htmlpgcoll.create_page(
    htmlpagecollectiongen.HtmlPage(
        name='bits_to_bits',
        info={
            'page_title': 'Encoding bits into bits'
        },
        code_id_list=zoo.get_code_ids_by_physical_logial('bits', 'bits'),
        template_name='page_code_list.html'
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

    logger.info("Compiling special pages ...")

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

htmlpgcoll.generate(
    output_dir=Dirs.output_dir,
    additional_context=global_context
)



################################################################################

logger.info("Done!")
