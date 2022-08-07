import re
import os
import os.path

import argparse

import logging

import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..'))

from ecczoogen.rtyamltools import EczYAML



def runmain(argv=None):

    logger = logging.getLogger(__name__)

    yaml = EczYAML()

    parser = argparse.ArgumentParser()
    parser.add_argument('--overwrite', action='store_true', default=False)
    parser.add_argument('root_path')

    args = parser.parse_args(argv)

    # Find all YAML files rooted at args.root_path and sanitize them.

    for (dirpath, dirnames, filenames) in os.walk( args.root_path ):

        for filename in filenames:

            fullfname = os.path.join(dirpath, filename)

            if not filename.endswith('.yml'):
                logger.warning(f"Skipping non-YAML file ‘{fullfname}’")
                continue

            logger.info(f"Inspecting YAML file ‘{fullfname}’")

            # read YAML
            with open(fullfname, encoding='utf-8') as f:
                data = yaml.load(f)

            if not args.overwrite:
                raise RuntimeError(
                    f"Please use --overwrite to confirm editing/sanitizing files "
                    f"in ‘{args.root_path}’, e.g., ‘{fullfname}’"
                )

            # dump YAML
            with open(fullfname, 'w', encoding='utf-8') as fw:
                yaml.dump(data, fw)




if __name__ == '__main__':
    runmain()
