import re
import os
import os.path
import json

import argparse

import logging

if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)

logger = logging.getLogger(__name__)


eczgen_root_dir = os.path.join(os.path.dirname(__file__), '..', '..')

import sys
sys.path.insert(0, eczgen_root_dir)

from ecczoogen.rtyamltools import EczYAML
yaml = EczYAML()



def runmain(argv=None):

    parser = argparse.ArgumentParser()

    parser.add_argument("--collect-missing-meta", action='store_true', default=False,
                        help="Collect all code/code_ids for which _meta information is missing.")

    parser.add_argument("--collect-by-contributor", action='store_true', default=False,
                        help="Collect all contributions for each individual contributor")

    #---

    parser.add_argument("--format", action='store', default='human', choices=('json', 'human',),
                        help="How to output the collected data ('human' for human-readable or 'json' for JSON data).")

    parser.add_argument("--eczoo-site-setup", action='store',
                        default=os.path.join(eczgen_root_dir, 'eczoo_site_setup.yml'),
                        help="Specify alternative settings file instead "
                        "of ‘eczoo_site_setup.yml’ at the root of this repo")

    parser.add_argument("--verbose", action='store_true', default=False,)

    args = parser.parse_args(argv)

    if args.verbose:
        logging.getLogger().setLevel(level=logging.DEBUG)


    with open(args.eczoo_site_setup, encoding='utf-8') as f:
        eczoo_site_setup = yaml.load(f)


    _root_dir = os.path.normpath(
        os.path.join(eczgen_root_dir, eczoo_site_setup['dirs']['root_dir'])
    )
    class Dirs:
        root_dir = _root_dir
        output_dir = os.path.join(_root_dir, eczoo_site_setup['dirs']['output_dir'])
        codes_dir = os.path.join(_root_dir, eczoo_site_setup['dirs']['codes_dir'])
        data_dir = os.path.join(codes_dir, '..')
        schemas_dir = os.path.join(_root_dir, 'schemas')



    # Find all YAML files rooted at args.root_path and sanitize them.

    collected = {}
    if args.collect_missing_meta:
        collected['missing-meta'] = []
    if args.collect_by_contributor:
        collected['by-contributor'] = []


    for (dirpath, dirnames, filenames) in os.walk( Dirs.codes_dir ):

        for filename in filenames:

            fullfname = os.path.join(dirpath, filename)

            if not filename.endswith('.yml'):
                logger.debug(f"Skipping non-YAML file ‘{fullfname}’")
                continue

            logger.debug(f"Inspecting YAML file ‘{fullfname}’")

            # read YAML
            with open(fullfname, encoding='utf-8') as f:
                data = yaml.load(f)

            this_code_info = {
                'code_source_yml': os.path.relpath(fullfname, Dirs.codes_dir),
                'code_id': data.get('code_id', None),
            }

            # find contributors
            meta = data.get('_meta', None)

            logging.debug(f"{meta=}")

            if args.collect_missing_meta and meta is None:
                collected['missing-meta'].append( this_code_info )

            if meta is None:
                continue

            if args.collect_by_contributor:
                for contributor in meta['contributors']:
                    item_j = None
                    for j, known_contributor_info in enumerate(collected['by-contributor']):
                        if known_contributor_info['contributor'] == contributor:
                            item_j = j
                            break
                    if item_j is None:
                        item_j = len(collected['by-contributor'])
                        collected['by-contributor'].append( {
                            'contributor': contributor,
                            'codes': []
                        } )

                    collected['by-contributor'][item_j]['codes'].append( this_code_info )

    if args.format == 'json':

        json.dump(collected, sys.stdout, indent=4)
        sys.stdout.write("\n")

    elif args.format == 'human':

        def show_code(code_info, indent=4):
            print(" "*indent + f"* Code ‘{code_info['code_id']}’ in {code_info['code_source_yml']}")

        def contributor_display(contributor):
            s = contributor_info['contributor']['name']
            if contributor.get('githubusername', None):
                s += f" (github:{contributor['githubusername']})"
            return s

        for key in collected:
            if key == 'missing-meta':
                # dump missing meta
                print("Missing _meta tags\n"
                      "------------------\n")
                for code_info in collected['missing-meta']:
                    show_code(code_info, indent=2)
                print()
            elif key == 'by-contributor':
                print("Contributions by contributor\n"
                      "----------------------------\n")
                for contributor_info in collected['by-contributor']:
                    print(f"{contributor_display(contributor_info['contributor'])}:\n")
                    for code in contributor_info['codes']:
                        show_code(code, indent=4)
                    print()
            else:
                logger.warning(f"Human-readable format not yet supported for {key}")
    else:
        raise ValueError(f"invalid format ‘{args.format}’")




if __name__ == '__main__':
    runmain()
