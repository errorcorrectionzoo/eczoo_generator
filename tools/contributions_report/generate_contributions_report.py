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

    argparser.add_argument("--verbose", action='store_true', default=False,
                           help="Print out more information")


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
        users = os.path.join(_root_dir, eczoo_site_setup['dirs']['users'])

    schema_loader = schemaloader.SchemaLoader(schemas_dir=Dirs.schemas_dir)

    eczllm_environment = eczllm.EczLLMEnvironment(
        figure_filename_extensions=eczoo_site_setup['image_filename_extensions'],
    )
    eczllm_scanner = eczllm.NodeScanner()


    # The zoo.
    zoo = Zoo(dirs=Dirs, schema_loader=schema_loader,
              eczllm_environment=eczllm_environment)

    zoo_codes_by_id_sorted = \
        sorted(zoo.all_codes().items(), key=lambda pair: pair[1].name.llm_text)


    # Load the users database.
    zoo_users_db = {}

    # Load the list of site contributors
    contributors_yml_fname = os.path.join(Dirs.users, 'users_db.yml')
    with open(contributors_yml_fname, encoding='utf-8') as f:
        zoo_users_db.update( dict([
            (u['user_id'], u)
            for u in yaml.safe_load(f)
        ]) )


    # Generate the report, use LaTeX

    latex_content = r"""
\documentclass[11pt]{article}
\usepackage[preset=sfnote]{phfnote}
\usepackage[sfdefault,semibold]{sourcesanspro}

\setlist[itemize,1]{leftmargin=5mm, label=\raisebox{1pt}{\footnotesize\(\blacktriangleright\)}}
\setlist[itemize,2]{label=\textbullet}

\def\coderef#1{\href{https://errorcorrectionzoo.org/c/#1}{\texttt{\detokenize{#1}}}}

\begin{document}
\title{Page edits of the error correction zoo}
\date{\today}
\maketitle

\sloppy

\tableofcontents

"""

    #
    # edits by contributor:
    #

    latex_content += r"\section{By contributor}" + "\n" + r"\begin{itemize}" + "\n"

    for user_id, user in sorted(zoo_users_db.items(), key=lambda pair: pair[1]['name']):
        latex_content += r"\item \textbf{" + user['name'] + r"} (" + user_id + r") "
        latex_content += r"\begin{itemize}" + "\n"
        contribs_found = False
        for code_id, code in zoo_codes_by_id_sorted:
            changelog = code.source_info.get('_meta', {}).get('changelog', [])
            for chg in changelog:
                if chg['user_id'] == user_id:
                    latex_content += r"\item \textit{"+chg['date'] + r"}\quad \textbf{" \
                        + code.name.llm_text+r"}\quad\coderef{" + code_id + r"}"
                    contribs_found = True
        if not contribs_found:
            latex_content += r"\item \textit{(no contributions detected)}"
        latex_content += r"\end{itemize}" + "\n"

    latex_content += r"\end{itemize}" + "\n"



    #
    # edits by code:
    #
    latex_content += r"""
\section{By code}

\begin{itemize}
"""
    
    for code_id, code in zoo_codes_by_id_sorted:

        ymlinfo = code.source_info

        latex_content += (r"""
\item \textbf{""" + code.name.llm_text + r"""}\quad \coderef{""" + code_id + r"""}
\begin{itemize}
""")
        if '_meta' not in ymlinfo or 'changelog' not in ymlinfo['_meta']:
            latex_content += r"\item \textbf{?? no changelog found ??}"
        else:
            for chg in ymlinfo['_meta']['changelog']:
                latex_content += (
                    r"\item \textit{" + chg['date'] + r"}\quad "
                    + r"\textbf{" + zoo_users_db[chg['user_id']]['name'] + r"} ("
                    + chg['user_id'] + r")"
                )
        latex_content += r"\end{itemize}" + "\n\n"

    latex_content += r"\end{itemize}" + "\n"



    latex_content += r"\end{document}" + "\n"

    # --- now compile it ---

    jobname = 'eczeditssummary'

    texoutfname = os.path.join(work_dir, jobname+'.tex')

    logger.debug("Output LaTeX file is %r", texoutfname)

    with open(texoutfname, 'w', encoding='utf-8') as fw:
        fw.write(latex_content)

    latex_exe = 'latex'
    latexmk_exe = 'latexmk'
    if args.latex_bin:
        latex_exe = os.path.join(args.latex_bin, latex_exe)
        latexmk_exe = os.path.join(args.latex_bin, latexmk_exe)

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
