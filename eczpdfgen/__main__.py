import os
import sys
import os.path
import logging
import argparse

import subprocess
import shutil

import yaml

from ecczoogen import schemaloader, eczllm, citationmanager, inspectimagefile
from ecczoogen.zoo import Zoo

from . import generate_codes_latex_document


image_dpi = 450

class MockHtmlPgCollection:
    def __init__(self, zoo, magick_exe, work_dir, fig_exts):
        super().__init__()
        self.zoo = zoo
        self.magick_exe = magick_exe
        self.work_dir = work_dir
        self.fig_exts = fig_exts

        self.img_counter = 0

    def get_code_href(self, code_id):
        return r"https://errorcorrectionzoo.org/c/" + code_id

    def get_defterm_href(self, ref_target):
        # let user find the term on the concepts page on their own ...
        return r"https://errorcorrectionzoo.org/concepts"

    def get_image_filename_path_info(self, image_filename, resource_info):
        logger = logging.getLogger(__name__)
        logger.debug("Figure: %r (%r)", image_filename, resource_info)
        
        code_id = resource_info.resource_id
        code = self.zoo.get_code(code_id)
        full_path = os.path.join(
            self.zoo.codes_dir,
            os.path.dirname(code.source_info_filename),
            image_filename
        )

        ext = ''
        for ext in self.fig_exts:
            full_path_wext = full_path + ext
            if os.path.exists(full_path_wext):
                break
        else:
            raise ValueError(
                f"Cannot find image file {full_path}, tried extentions {self.fig_exts}")

        out_relfname = f'img{self.img_counter}.pdf'
        out_fname = os.path.join(self.work_dir, out_relfname)
        self.img_counter += 1

        image_info = inspectimagefile.get_image_file_info(full_path_wext)

        # convert that file
        run_process(
            [ self.magick_exe, '-density', str(image_dpi), full_path_wext, out_relfname ],
            cwd=self.work_dir
        )

        return {
            'prefixed_path': out_relfname,
            'image_info': image_info,
        }



def run_process(args, *, cwd):
    logger = logging.getLogger(__name__)
    logger.debug("Running: %r", args)
    subprocess.run(args, cwd=cwd, check=True)


def run_main(argv=None):
    
    argparser = argparse.ArgumentParser()

    argparser.add_argument('-o', '--output', action='store',
                           help="output file")

    argparser.add_argument("--eczoo-site-setup", action='store',
                           default='./eczoo_site_setup.yml',
                           help="Specify alternative settings file instead "
                           "of ‘./eczoo_site_setup.yml’")

    argparser.add_argument("-w", "--work-dir", action='store',
                           default='_tmppdf',
                           help="A folder for temporary files, in which we'll run LaTeX etc.")

    argparser.add_argument('-x', '--latex-bin', action='store',
                           default=None,
                           help="Folder where we can find LaTeX executables "
                           "(for latex and latexmk)")

    argparser.add_argument('-M', '--magick-exe', action='store',
                           default=None,
                           help="Path to magick executable to convert graphics")

    argparser.add_argument("--verbose", action='store_true', default=False,
                           help="Print out more information")

    argparser.add_argument('code_id', action='store', nargs='+',
                           help="code ID(s) for which to generate PDF")


    args = argparser.parse_args(argv)

    if args.verbose:
        logging.basicConfig(level=logging.DEBUG)
        # otherwise this is just uselessly way too verbose:
        logging.getLogger('pylatexenc').setLevel(level=logging.INFO)
        logging.getLogger('llm').setLevel(level=logging.INFO)
    else:
        logging.basicConfig(level=logging.INFO)

    logger = logging.getLogger(__name__)


    if args.work_dir:
        work_dir = args.work_dir
    else:
        work_dir = '_tmppdf'
    os.makedirs(work_dir, exist_ok=True)


    with open(args.eczoo_site_setup, encoding='utf-8') as f:
        eczoo_site_setup = yaml.safe_load(f)

    _root_dir = os.path.abspath(eczoo_site_setup['dirs']['root_dir'])

    class Dirs:
        root_dir = _root_dir
        output_dir = os.path.join(_root_dir, eczoo_site_setup['dirs']['output_dir'])
        codes_dir = os.path.join(_root_dir, eczoo_site_setup['dirs']['codes_dir'])
        schemas_dir = os.path.join(_root_dir, 'schemas')
        citation_extras = os.path.join(_root_dir, eczoo_site_setup['dirs']['citation_extras'])

    schema_loader = schemaloader.SchemaLoader(schemas_dir=Dirs.schemas_dir)

    eczllm_environment = eczllm.EczLLMEnvironment(
        figure_filename_extensions=eczoo_site_setup['image_filename_extensions'],
    )
    eczllm_scanner = eczllm.NodeScanner()


    # The zoo.
    zoo = Zoo(dirs=Dirs, schema_loader=schema_loader,
              eczllm_environment=eczllm_environment)

    for code_id, code in zoo.all_codes().items():
        eczllm_scanner.scan_schemadatalike_obj(code, what=f"<code {code.code_id}>")

    # The citations manager.
    with open(os.path.join(Dirs.citation_extras, 'citations_hints.yml'), encoding='utf-8') as f:
        citation_hints = yaml.safe_load(f)
    citation_manager = citationmanager.CitationTextManager(
        citation_hints,
        eczllm_environment=eczllm_environment,
    )
    cache_citation_fetched_data_filename = 'dat/cache_citation_fetched_data.json'
    citationscachefile = os.path.join(Dirs.output_dir, cache_citation_fetched_data_filename)
    with open(citationscachefile, 'r') as f:
        citation_manager.load_db_json(f)
    encountered_citations = eczllm_scanner.get_encountered_citations()
    for c in encountered_citations:
        try:
            citation_manager.add_encountered_citation(c)
        except Exception as e:
            logger.error(f"Invalid citation key ‘{c.citation_key_prefix}’:‘{c.citation_key}’ "
                         f"in ‘{c.encountered_where}’:\n"
                         f"{e}", exc_info=e)
            raise
    citation_manager.build_full_citation_text_database()
    eczllm_environment.set_citationsmanager(citation_manager)


    magick_exe = 'magick'
    if args.magick_exe:
        magick_exe = args.magick_exe

    # needed to "resolve" refs to codes and defterms
    eczllm_environment.set_htmlpgcollection_zoo(
        MockHtmlPgCollection(zoo, magick_exe, work_dir,
                             eczoo_site_setup['image_filename_extensions']),
        zoo
    )

    code_ids = list(args.code_id)

    latex_content = generate_codes_latex_document(zoo, code_ids, eczllm_environment)

    # produced latex file.

    jobname = 'code'

    texoutfname = os.path.join(work_dir, jobname+'.tex')

    logger.debug("Output LaTeX file is %r", texoutfname)

    with open(texoutfname, 'w', encoding='utf-8') as fw:
        fw.write(latex_content)

    # compile the class file, to make sure we absolutely have the latest version
    # & so as not to keep the .cls in version control
    
    shutil.copy( os.path.join(os.path.dirname(__file__), 'ecznote.dtx'), work_dir )
    shutil.copy( os.path.join(os.path.dirname(__file__), 'ecznote.ins'), work_dir )

    # copy logo pictures, too
    shutil.copy( os.path.join(Dirs.root_dir, 'static_assets',
                              'icons', 'eczoo-main-logo.pdf'),
                 work_dir )
    shutil.copy( os.path.join(Dirs.root_dir, 'static_assets',
                              'icons', 'eczoo-main-logo-mobile.pdf'),
                 work_dir )

    latex_exe = 'latex'
    latexmk_exe = 'latexmk'
    if args.latex_bin:
        latex_exe = os.path.join(args.latex_bin, latex_exe)
        latexmk_exe = os.path.join(args.latex_bin, latexmk_exe)

    # remove existing .cls file, if existent
    ecznotecls = os.path.join(work_dir, 'ecznote.cls')
    if os.path.exists(ecznotecls):
        os.remove( ecznotecls )

    run_process([
        latex_exe,
        'ecznote.ins'
    ], cwd=work_dir)
    
    # now we have the cls file, generate the PDF for our code

    run_process([
        latexmk_exe,
        '-pdf',
        jobname,
    ], cwd=work_dir)

    temp_pdf_output = os.path.join(work_dir, jobname+'.pdf')

    # copy out the PDF if requested
    if args.output:
        shutil.copy( temp_pdf_output, args.output )
    else:
        # or simply view it
        if sys.platform.startswith('darwin'):
            subprocess.call([ 'open', temp_pdf_output ])
        elif sys.platform.startswith('win'):
            # only for windows---
            os.startfile( temp_pdf_output )
        else:
            subprocess.call([ 'xdg-open', temp_pdf_output ])

    return



if __name__ == '__main__':
    try:
        run_main()
    except Exception as e:
        logging.error("Exception! " + str(e), exc_info=e)
        import pdb; pdb.post_mortem()
