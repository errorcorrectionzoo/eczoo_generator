import os
import os.path
import re
import sys

import jinja2

import logging

sys.path.insert(0, '.')
import ecczoogen
ecczoogen.setup_logging(level=logging.DEBUG)

from ecczoogen import zoo, htmlpagecollectiongen

logger = logging.getLogger()

#
# Fixed paths
#

codes_dir = os.path.join(os.path.dirname(__file__), 'scratch-example-codes')

templates_dir = os.path.join(os.path.dirname(__file__), 'templates')
stylesheets_dir = os.path.join(os.path.dirname(__file__), 'stylesheets')
static_pages_dir =os.path.join(os.path.dirname(__file__), 'static_pages')

output_dir = os.path.join(os.path.dirname(__file__), 'out')


################################################################################

logger.info("Building the zoo ...")

#
# Build the Code Collection --> create a `ecczoogen.zoo` object
#

zoo = zoo.Zoo(codes_dir=codes_dir)


################################################################################

logger.info("Setting up the jinja2 template environment ...")

#
# Set up an environment for generating the HTML pages with our HTML templates
#

jinja2env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(templates_dir),
    autoescape=jinja2.select_autoescape(['html', 'xml']),
    trim_blocks=True,
    lstrip_blocks=True,
)

htmlpgcoll = htmlpagecollectiongen.HtmlPageCollection(
    zoo,
    jinja2env,
    base_url=''
)

################################################################################

logger.info("Setting up ecc list pages ...")

#
# Set up the pages of the site
#

#
# A page for non-CSS codes
#
htmlpgcoll.create_page(
    htmlpagecollectiongen.HtmlPage(
        name='qu_nonCSS_codes',
        info={
            'page_title': 'A selection of non-CSS codes'
        },
        code_id_list=('stabilizer', 'qu_LDPC', 'XZZX_toric'),
        template_name='page_code_list.html'
    )
)

#
# A page for CSS codes
#
htmlpgcoll.create_page(
    htmlpagecollectiongen.HtmlPage(
        name='qu_CSS_codes',
        info={
            'page_title': 'A selection of CSS codes'
        },
        code_id_list=('toric', 'CSS'),
        template_name='page_code_list.html'
    )
)

#
# A page for classical codes
#
htmlpgcoll.create_page(
    htmlpagecollectiongen.HtmlPage(
        name='class_codes',
        info={
            'page_title': 'Some classical codes'
        },
        code_id_list=('class_linear',),
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

logger.info("Compiling stylesheets and static pages ...")

#
# Compile the stylesheet(s)
#

import sass

output_css_dir = os.path.join(output_dir, 'css')
os.makedirs(output_css_dir, exist_ok=True)

root_scss_list = [
    ('main.scss', 'main.css'),
]

for root_scss, root_css in root_scss_list:
    logger.info(f"Compiling ‘{root_scss}’ -> ‘{root_css}’")
    css = sass.compile(
        filename=os.path.join(stylesheets_dir, root_scss),
        output_style='expanded',
        #output_style='compressed',
    )
    with open(os.path.join(output_css_dir, root_css), 'w') as f:
        f.write(css)

#
# Compile any static pages, like the index.html page
#
for fn in os.listdir(static_pages_dir):
    if fn.endswith(".html"):
        with open(os.path.join(static_pages_dir, fn)) as f:
            pg_source = f.read()
        pg_template = jinja2env.from_string(pg_source)
        with open(os.path.join(output_dir, fn), 'w') as fw:
            fw.write( pg_template.render(global_context) )

################################################################################


#
# generate!
#
htmlpgcoll.generate(
    output_dir=output_dir,
    additional_context=global_context
)


logger.info("Done!")
