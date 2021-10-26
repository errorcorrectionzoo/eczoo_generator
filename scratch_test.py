import os
import os.path
import re
import sys

import jinja2
import markupsafe

import logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)


sys.path.insert(0, '.')
from ecczoogen import zoo


codes_dir = os.path.join(os.path.dirname(__file__), 'scratch-example-codes')
templates_dir = os.path.join(os.path.dirname(__file__), 'templates')

zoo = zoo.Zoo(codes_dir=codes_dir)

jenv = jinja2.Environment(
    loader=jinja2.FileSystemLoader(templates_dir),
    autoescape=jinja2.select_autoescape(['html', 'xml'])
)


def code_ref(code):
    return markupsafe.Markup( f'''<a href="#{code.code_id}">{code.name}</a>''' )

jenv.filters['code_ref'] = code_ref


code_list = [ zoo.collection.get_code(c) for c in ('toric', 'qu_LDPC', 'stabilizer', 'CSS') ]

with open('output-scratch-example.html', 'w') as f:
    f.write(jenv.get_template('selected_codes_page.html').render(code_list=code_list))
