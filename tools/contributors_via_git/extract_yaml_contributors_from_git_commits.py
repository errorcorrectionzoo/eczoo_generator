import re
import os.path
import datetime
import collections

import logging

import git
import yaml

import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..'))

from ecczoogen import schemaloader


this_root_dir = os.path.join(os.path.dirname(__file__), '..', '..')

eczoo_site_setup_yml = os.path.join(this_root_dir, 'eczoo_site_setup.yml')

def runmain():

    logger = logging.getLogger(__name__)

    with open(eczoo_site_setup_yml, encoding='utf-8') as f:
        eczoo_site_setup = yaml.safe_load(f)

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

    # 
    eft = ExtractFromTree(Dirs.data_dir)
    eft.extract()

    code_contributors = eft.get_code_contributors()

    import pprint
    pprint.pprint(code_contributors)

    print("File renames:")
    print(eft.file_renames.dumps())
    print()
    print("Code ID renames:")
    print(eft.code_id_renames.dumps())



# ------------------------------------------------------------------------------


class RenamesTracker:
    r"""
    Keep track of how names or identifiers might have been renamed in a history.

    Add a rename rule with `add_rename(ts, old, new)` to signify that at time
    `ts`, the name `old` was nenamed to `new`.

    To see how a name `name` at time `ts` would translate to the most recent
    name, use `apply_renames(ts, name)`.
    """
    def __init__(self):
        super().__init__()
        # sorted in reverse order so that we only have to append new rules as we
        # go back in time
        self.renames_ts_list = []
        self.renames_dict = {}

    def add_rename(self, ts, old, new):
        if ts not in self.renames_dict:
            self.renames_dict[ts] = {}
            self.renames_ts_list.append(ts)
            self.renames_ts_list.sort(reverse=True)
            
        self.renames_dict[ts][old] = new

    def apply_renames(self, ts, name):
        for tsx in reversed(self.renames_ts_list): # go chronologically
            if tsx <= ts:
                continue
            name = self.renames_dict[tsx].get(name, name)
        return name


    def dumps(self):
        lines = []
        for ts in self.renames_ts_list:
            dt = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
            lines.append(f"@ {dt}")
            for old, new in self.renames_dict[ts].items():
                lines.append(f"    {old:>60} → {new}")
        return "\n".join(lines)



_rx_code_id = re.compile(
    r'''^code_id:\s*(?P<openquote>['"]?)(?P<code_id>[a-zA-Z0-9_.-]+)(?P=openquote)\s*$''',
    flags=re.MULTILINE | re.IGNORECASE
)


Contributor = collections.namedtuple('Contributor', ('name', 'email'))


class ExtractFromTree:
    def __init__(self, repo_dir):
        super().__init__()
        self.repo_dir = repo_dir
        
        self.repo = git.Repo(repo_dir)

        self.file_renames = RenamesTracker()
        self.code_id_renames = RenamesTracker()

        self.collected_contribution_events = []

    def extract(self, head_commit=None):

        logger = logging.getLogger(__name__)

        if head_commit is None:
            head_commit = self.repo.head
            
        iter_commits = self.repo.iter_commits(paths='codes') #, max_count=100) # DEBUG

        for commit in iter_commits:
            self._process_commit(commit)


    def _process_commit(self, commit):

        logger = logging.getLogger(__name__)

        contributor = Contributor(
            name=commit.author.name,
            email=commit.author.email,
        )

        commit_timestamp = commit.committed_date
        commit_datetime = datetime.datetime.fromtimestamp(commit_timestamp,
                                                          tz=datetime.timezone.utc)

        logger.debug(f"Exploring commit {commit.hexsha} at {commit_datetime}")

        # Let's explore what changes were introduced in this commit

        store_file_delete_new_info = {
            'new': [],
            'deleted': [],
        }

        for commit_parent in commit.parents:

            for diff in commit_parent.diff(commit, paths='codes'):

                d = self._process_diff(
                    diff, commit, commit_parent, contributor,
                    store_file_delete_new_info=store_file_delete_new_info
                )

        new_files_by_code_id = {
            fni['code_id']: fni['path']
            for fni in store_file_delete_new_info['new']
        }

        for finfo in store_file_delete_new_info['deleted']:
            if finfo['code_id'] in new_files_by_code_id:
                # we found the file rename thanks to its code_id
                self.file_renames.add_rename(
                    commit_timestamp,
                    finfo['path'],
                    new_files_by_code_id[finfo['code_id']]
                )
            else:
                # we don't know what this file was renamed to, or if it was
                # simply deleted from the zoo.
                self.file_renames.add_rename(commit_timestamp, diff.a_path,
                                             f'DELETED-{commit.hexsha}-{diff.a_path}')


    def _process_diff(self, diff, commit, commit_parent, contributor, *,
                      store_file_delete_new_info):

        logger = logging.getLogger(__name__)
        logger.debug(f"Got diff for {diff.b_path}")

        commit_timestamp = commit.committed_date
        
        a_code_id = None
        b_code_id = None

        file_path = diff.b_path

        if diff.new_file:
            logger.debug(f"File {diff.b_path!r} was created")
            file_path = diff.b_path
            a_code_id = None
            b_code_id = get_code_id_from_yml_data(commit, diff.b_path)

            store_file_delete_new_info['new'].append(
                dict(path=diff.b_path, code_id=b_code_id)
            )

        elif diff.renamed_file:
            logger.debug(f"File {diff.a_path!r} was renamed to {diff.b_path!r}")
            self.file_renames.add_rename(commit_timestamp, diff.a_path, diff.b_path)
            a_code_id = get_code_id_from_yml_data(commit_parent, diff.a_path)
            b_code_id = get_code_id_from_yml_data(commit, diff.b_path)

            logger.debug(f"code_id of renamed file is {a_code_id!r} → {b_code_id!r}")

        elif diff.deleted_file:
            logger.debug(f"File {diff.a_path!r} was deleted")
            file_path = diff.a_path
            a_code_id = get_code_id_from_yml_data(commit_parent, diff.a_path)
            b_code_id = None

        else:
            assert diff.a_path == diff.b_path

            a_code_id = get_code_id_from_yml_data(commit_parent, diff.a_path)
            b_code_id = get_code_id_from_yml_data(commit, diff.b_path)

        if a_code_id is not None and b_code_id is not None and a_code_id != b_code_id:
            # there was a rename in the code ID as well.
            self.code_id_renames.add_rename(commit_timestamp, a_code_id, b_code_id)

        if not file_path.endswith('.yml'):
            logger.debug(f"Skipping diff for non-YAML file {file_path}")
            return

        #file_path = self.file_renames.apply_renames(commit_timestamp, file_path)

        code_id = b_code_id
        if code_id is None:
            code_id = a_code_id

        #code_id = self.code_id_renames.apply_renames(commit_timestamp, code_id)

        # get precise word diff etc.  has_significant_diff will check all commit
        # parents so should be able to handle merges correctly.

        if has_significant_diff(self.repo, commit, diff.a_path, diff.b_path):

            self.collected_contribution_events.append(
                (commit_timestamp, code_id, file_path, contributor)
            )


    def get_code_contributors(self):
        # process all code_id's and file_path's to apply any renames, and reduce
        # the contributors list.

        code_contributors = {}

        for ts, code_id, file_path, contributor in reversed(self.collected_contribution_events):
            
            code_id = self.code_id_renames.apply_renames(ts, code_id)
            file_path = self.file_renames.apply_renames(ts, file_path)

            key = (code_id, file_path)

            if key not in code_contributors:
                code_contributors[key] = []

            if contributor not in code_contributors[key]:
                code_contributors[key].append(contributor)

        return code_contributors


# ------

def get_code_id_from_yml_data(commit, path):

    logger = logging.getLogger(__name__)

    try:
        # parse the YML file at this revision
        ymlblob = commit.tree[path]
    except KeyError:
        # could be the file was deleted.
        logger.debug(f"Could not get YAML data for {path} in commit {commit.hexsha}")
        return None

    try:
        ymldata = ymlblob.data_stream.read().decode('utf-8')
    except UnicodeDecodeError:
        logger.debug(f"Invalid UTF-8 encoding in {path} in commit {commit.hexsha}")
        return None

    rxm = _rx_code_id.search(ymldata)
    if rxm is not None:
        return rxm.group('code_id')

    logger.debug(
        f"Could not find any code_id in the YAML file {path} in commit {commit.hexsha}:\n"
        f"{ymldata}"
    )
    return None
    
    



# -----



diff_score_threshold = 120
diff_score_for_created_file = diff_score_threshold+1


def compute_diff_score(thediff, file_path_old, file_path_new):
    
    logger = logging.getLogger(__name__)

    logger.debug("the diff is:\n"+thediff)
    difflines = thediff.strip().split('\n')

    logger.debug(f"{file_path_old=} {file_path_new=}")

    logger.debug(f"{difflines=}")

    if not difflines or not difflines[0]:
        return 0

    assert difflines[0] == f'diff --git a/{file_path_old} b/{file_path_new}'

    j = 1
    # skip "index ... ", "deleted ...", and "--- ..."
    while not difflines[j].startswith('+++ '):
        if difflines[j].startswith("new file"):
            # file is new, no need to parse diff
            return diff_score_for_created_file
        j += 1
        if j >= len(difflines):
            return 0 # no changes
    assert difflines[j].startswith('+++ ') # also skip the "+++ ....." line
    j += 1
    restlines = difflines[j:]

    def getchangelen(restline):
        restline = restline[1:] # remove the initial '+' (or '-')
        restline = re.sub(r'^[a-zA-Z_.]+:', '', restline) # remove a YAML root dict key
        restline = re.sub(r'^\s{,2}#.*$', '', restline) # comments don't count
        restline = re.sub(r'\\(begin|end)\{[a-zA-Z0-9_-]+\}', '',
                          restline) # remove environments
        restline = re.sub(r'\\([a-zA-Z]+|.)', '', restline) # remove macros
        # keep only alpha chars
        restline = re.sub(r'[^a-zA-Z0-9]+', '', restline)
        #logger.debug(f"{restline=}")
        return len(restline)

    numcharchanges = sum([ getchangelen(restline) for restline in restlines
                           if restline.startswith('+') ])
    return numcharchanges


def has_significant_diff(repo, commit, file_path_old, file_path_new):

    logger = logging.getLogger(__name__)

    if not commit.parents:
        # root commit is a significant change :)
        return True

    scores = []

    for parent in commit.parents:

        thediff = repo.git.diff(parent.hexsha, commit.hexsha, '--',
                                file_path_old, file_path_new,
                                find_copies=True, find_copies_harder=True,
                                word_diff='porcelain', unified=0,
                                word_diff_regex=r'[a-zA-Z0-9(){}_%\\-]+')

        thescore = compute_diff_score(thediff, file_path_old, file_path_new)
        scores.append(thescore)

    # take the min--if there's a parent commit for which the diff is really
    # small, then it's likely that this was a merge commit where the diff will
    # be large w.r.t. the other branch. The contributor will be identified in
    # the development of the earlier commit in the branch that was merged.
    diffscore = min(scores)

    if diffscore > diff_score_threshold:
        logger.debug(f"Changes by {commit.author.name} to {file_path_new} on {commit} "
                     f"are indeed significant! ({diffscore=})")
        return True

    logger.debug(f"Changes by {commit.author.name} to {file_path_new} on {commit} "
                 f"are not ruled as significant ({diffscore=})")
    return False


# ------------------------------------------------------------------------------

if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)
    runmain()
