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


compress_contributions_fuzziness_timedelta = datetime.timedelta(days=90)


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

    users_db = {}


    _user_id_by_githubusername = {}
    def _get_user_id(githubusername, user_name):
        # let's hope names are unique enough (for now)
        if githubusername and githubusername in _user_id_by_githubusername:
            return _user_id_by_githubusername[githubusername]
        user_id = re.sub('[^a-zA-Z0-9_+-]+', '', user_name)
        if githubusername:
            _user_id_by_githubusername[githubusername] = user_id
        return user_id
        
    def _update_from_meta_contributors(meta_contributors, contributor, del_from_meta):
        for j in range(len(meta_contributors)):
            c = meta_contributors[j]
            #if ('githubusername' in c and 'githubusername' in contributor
            #    and c['githubusername'] == contributor['githubusername']) \
            #   or c['name'] == contributor['name']:
            if c['name'] == contributor['name']:
                # found them
                logger.debug('Found contributor=%r in _meta: %r', contributor, c)
                # update
                update_assert_equal(contributor, c)
                # mark for deletion
                del_from_meta.add(j)
                return

    with CachedGithubUsernameResolver() as ghusernameresolver:

        for code_id_fname_key, ccinfo in code_contributions.items():

            code_id = ccinfo['code_id']
            code_fpath = ccinfo['file_path']
            code_contributions = ccinfo['contributions']

            # open the current version of the file and get any existing _meta tag
            with open( os.path.join(Dirs.data_dir, code_fpath), encoding='utf-8' ) as f:
                disk_code_info = yaml.load(f)

            if '_meta' not in disk_code_info:
                disk_code_info['_meta'] = { 'changelog': [] }
                disk_code_info.yaml_set_comment_before_after_key(
                    '_meta', before='\n\nBegin Entry Meta Information'
                )

            meta_contributors = {}
            del_from_meta = []
            if 'contributors' in disk_code_info['_meta']:
                # we'll convert contributors to changelog
                meta_contributors = disk_code_info['_meta']['contributors']

            if 'changelog' in disk_code_info['_meta']:
                raise ValueError(
                    f"Can't handle existing _meta: changelog: in YAML data file!  {code_fpath}"
                )

            meta_changelog = []
            del_from_meta = set()

            for contrib in code_contributions:
                cgh = ghusernameresolver.get_githubusername(
                    contrib['commithash'], contrib['contributor']['email']
                )

                this_name = contrib['contributor']['name']
                # fix name, if necessary
                this_name = fix_names_dict.get(this_name, this_name)

                this_user_id = _get_user_id(cgh, this_name)

                this_contributor = {
                    'name': yaml.SqStr(this_name),
                    'user_id': yaml.SqStr(this_user_id),
                }
                if cgh:
                    this_contributor['githubusername'] = cgh

                _update_from_meta_contributors(meta_contributors, this_contributor, del_from_meta)

                existing_user = users_db.get(this_user_id, None)
                if existing_user is None:
                    # add them
                    users_db[this_user_id] = this_contributor
                else:
                    # make sure info is up to date
                    update_assert_equal(users_db[this_user_id], this_contributor)

                #if this_contributor not in meta_contributors:
                #    meta_contributors.append(this_contributor)

                logger.debug('adding contribution, contrib=%r', contrib)

                this_change_event = {
                    'user_id': this_user_id,
                    'date': str(contrib['date'])
                }

                meta_changelog.insert(0, this_change_event)
                    
            # delete detected contributors from meta_contributions.  Remember to
            # remove last indices first so that indices are always valid and are
            # not shifted!!
            logger.debug("Removing indices %r from meta_contributors=%r",
                         del_from_meta, meta_contributors)
            for del_idx in sorted(del_from_meta, reverse=True):
                del meta_contributors[del_idx]

            # make sure contributions are sorted by date, most recent first
            meta_changelog.sort(
                key=lambda d: datetime.datetime.fromisoformat(d['date']),
                reverse=True,
            )

            # Clean up the change log (compress nearby contributions)
            j = 0
            while j < len(meta_changelog):

                chgevent = meta_changelog[j]

                # is there an existing change event by the same user with a
                # timestamp that is within the given tolerance? if so, skip
                skip_this_event = False
                for c in meta_changelog[:j]:
                    if c['user_id'] == chgevent['user_id']:
                        d1 = datetime.datetime.fromisoformat(c['date'])
                        d2 = datetime.datetime.fromisoformat(chgevent['date'])
                        if (d1 - d2) < compress_contributions_fuzziness_timedelta:
                            # skip
                            skip_this_event = True
                            break
                if skip_this_event:
                    del meta_changelog[j]
                    continue

                j += 1

            # make dates less crazy precise, no need for millisecond precision
            for chgevent in meta_changelog:
                chgevent['date'] = \
                    datetime.datetime.fromisoformat(chgevent['date']).strftime('%Y-%m-%d')

            disk_code_info['_meta']['changelog'] = meta_changelog
            disk_code_info['_meta'].yaml_set_comment_before_after_key(
                'changelog', before='Change log - most recent first', indent=2,
            )

            if not list(meta_contributors):
                del disk_code_info['_meta']['contributors']

            # dump back to output
            with open( os.path.join(Dirs.data_dir, code_fpath), 'w', encoding='utf-8') as fw:
                yaml.dump(disk_code_info, fw)

    with open(os.path.join(Dirs.data_dir, 'users/users_db.yml'), 'w', encoding='utf-8') as fw:
        ydb = yaml.load('''
users_db:
  # dummy user
  - dummy: true
''')
        del ydb['users_db'][0]
        for j, user in enumerate(users_db.values()):
            ydb['users_db'].append(user)
            ydb['users_db'].yaml_set_comment_before_after_key(
                j, 
                before='\n\n',
            )
            
        yaml.dump( ydb, fw )


def update_assert_equal(a, b):
    for k, v in b.items():
        if k in a:
            if not (a[k] == b[k]):
                raise ValueError(
                    f"update_assert_equal({a=!r}, {b=!r}) failed for {k=}  ({a[k]=}  !=  {b[k]=}"
                )
        else:
            a[k] = b[k]


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
