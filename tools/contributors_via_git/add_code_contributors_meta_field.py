import re
import os.path
import datetime
import json
import argparse
import time

import logging

import git


import github # github API to fetch github user names from the commit's email

import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..'))

from ecczoogen import schemaloader
from ecczoogen.rtyamltools import EczYAML


this_root_dir = os.path.join(os.path.dirname(__file__), '..', '..')

eczoo_site_setup_yml = os.path.join(this_root_dir, 'eczoo_site_setup.yml')



# Your profile settings -> "Developer Settings" -> "Personal Access Tokens" -> "Generate new token"
# -> save into a file placed alongside this script and named "ghtoken.SECRET"
with open( os.path.join(os.path.dirname(__file__), 'ghtoken.SECRET') ) as f:
    GITHUB_ACCESS_TOKEN = f.read().strip()



def runmain(argv=None):

    logger = logging.getLogger(__name__)

    yaml = EczYAML()

    parser = argparse.ArgumentParser()
    parser.add_argument('contributions_json_file')

    args = parser.parse_args(argv)

    with open(eczoo_site_setup_yml, encoding='utf-8') as f:
        eczoo_site_setup = yaml.load(f)

    _root_dir = os.path.normpath(
        os.path.join(this_root_dir, eczoo_site_setup['dirs']['root_dir'])
    )

    class Dirs:
        root_dir = _root_dir
        output_dir = os.path.join(_root_dir, eczoo_site_setup['dirs']['output_dir'])
        codes_dir = os.path.join(_root_dir, eczoo_site_setup['dirs']['codes_dir'])
        data_dir = os.path.join(codes_dir, '..')
        schemas_dir = os.path.join(_root_dir, 'schemas')
        citation_extras = os.path.join(_root_dir, eczoo_site_setup['dirs']['citation_extras'])

    
    logger.info(f"Loading extracted code contributions from {args.contributions_json_file} ...")

    with open(args.contributions_json_file, encoding='utf-8') as f:
        code_contributions = json.load(f)

    os.makedirs('out', exist_ok=True)
    

    with open('fix_names.yml', encoding='utf-8') as f:
        fix_names_dict = yaml.load(f)['fix_names']

    # collect contributor information for each code-id/code-file

    with CachedGithubUsernameResolver() as ghusernameresolver:

        for code_id_fname_key, ccinfo in code_contributions.items():

            code_id = ccinfo['code_id']
            code_fpath = ccinfo['file_path']
            code_contributions = ccinfo['contributions']

            # open the current version of the file and get any existing _meta tag
            with open( os.path.join(Dirs.data_dir, code_fpath), encoding='utf-8' ) as f:
                disk_code_info = yaml.load(f)

            if '_meta' not in disk_code_info:
                disk_code_info['_meta'] = { 'contributors': [] }
                disk_code_info.yaml_set_comment_before_after_key('_meta', before='\n\nBegin Entry Meta Information')

            meta_contributors = disk_code_info['_meta']['contributors']

            for contrib in code_contributions:
                cgh = ghusernameresolver.get_githubusername(contrib['commithash'], contrib['contributor']['email'])

                this_name = contrib['contributor']['name']
                # fix name, if necessary
                this_name = fix_names_dict.get(this_name, this_name)

                this_contributor = {
                    'name': yaml.SqStr(this_name),
                }
                if cgh:
                    this_contributor['githubusername'] = cgh

                if this_contributor not in meta_contributors:
                    meta_contributors.append(this_contributor)

            # dump back to output
            with open( os.path.join(Dirs.data_dir, code_fpath), 'w', encoding='utf-8') as fw:
                yaml.dump(disk_code_info, fw)



_github_usernames_by_email_cache_file = 'out/_cache_github_usernames_by_email.json'


class CachedGithubUsernameResolver:
    def __init__(self, **kwargs):
        super().__init__()
        self.resolver = GithubUsernameResolver(**kwargs)
        
    def __enter__(self):
        self.resolver.load_cache()
        return self.resolver
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.resolver.dump_cache()
        return False

class GithubUsernameResolver:
    def __init__(self):
        super().__init__()
        self.githubusernames_by_email = {}

        self.gh = github.Github(GITHUB_ACCESS_TOKEN)
        self.ghrepo = self.gh.get_repo('errorcorrectionzoo/eczoo_data')

    def load_cache(self):
        if not os.path.exists(_github_usernames_by_email_cache_file):
            return
        with open(_github_usernames_by_email_cache_file, encoding='utf-8') as f:
            self.githubusernames_by_email = json.load(f)

    def dump_cache(self):
        with open(_github_usernames_by_email_cache_file, 'w', encoding='utf-8') as fw:
            self.githubusernames_by_email = json.dump(self.githubusernames_by_email, fw)

    def get_githubusername(self, commithash, email):
        if email in self.githubusernames_by_email:
            return self.githubusernames_by_email[email]

        return self._populate(commithash, email)

    def _populate(self, commithash, email):

        logger = logging.getLogger(__name__)

        ghcommit = self.ghrepo.get_commit(commithash)

        logger.debug(f"Commit is = {ghcommit!r}")

        if ghcommit.author is None:
            # author is not associated with a github username?
            self.githubusernames_by_email[email] = None
            return None

        # not too many requests at a time
        time.sleep(1.0)

        ghusername = ghcommit.author.login

        self.githubusernames_by_email[email] = ghusername
        return ghusername
        
        # try:
        #     #result = self.gh.search_users(query=f"\"{email}\" in:email") # doesn't work?
        # except Exception as e:
        #     logger.critical(f"Failed to search github users for {email}: {e}", exc_info=True)
        #     raise
        
        # result_named_users = list(result)
        # if len(result_named_users) == 0:
        #     logger.warning(f"Did not find github user name for user with email ‘{email}’")
        #     self.githubusernames_by_email[email] = None
        #     return None

        # if len(result_named_users) > 1:
        #     logger.warning(f"Got more than one github user name for user with email ‘{email}’")
        #     self.githubusernames_by_email[email] = None
        #     return None

        # named_user = result_named_users[0]

        # self.githubusernames_by_email[email] = named_user.login
        # return self.githubusernames_by_email[email]

        


# ------------------------------------------------------------------------------

if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)

    for modname in ('github.Requester', 'urllib3.connectionpool'):
        logging.getLogger(modname).setLevel(level=logging.INFO)

    runmain()
