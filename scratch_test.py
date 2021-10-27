import os
import os.path
import re
import sys

import jinja2

import logging

sys.path.insert(0, '.')
import ecczoogen
ecczoogen.setup_logging(level=logging.DEBUG)
logger = logging.getLogger()
from ecczoogen import zoo, htmlpagecollectiongen



codes_dir = os.path.join(os.path.dirname(__file__), 'scratch-example-codes')
templates_dir = os.path.join(os.path.dirname(__file__), 'templates')

zoo = zoo.Zoo(codes_dir=codes_dir)

jinja2env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(templates_dir),
    autoescape=jinja2.select_autoescape(['html', 'xml']),
    trim_blocks=True,
    lstrip_blocks=True,
)


htmlpgcoll = htmlpagecollectiongen.HtmlPageCollection(zoo, jinja2env, base_url='')

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
        template_name='selected_codes_page.html'
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
        template_name='selected_codes_page.html'
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
        template_name='selected_codes_page.html'
    )
)


#
# generate!
#
htmlpgcoll.generate(
    output_dir='scratch-output-html/',
    additional_context={
        'nav_pages': htmlpgcoll.pages
    }
)


