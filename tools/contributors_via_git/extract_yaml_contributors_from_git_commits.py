import re
import os.path
import datetime
import json

import logging

import git
import yaml

import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..'))

from ecczoogen import schemaloader


this_root_dir = os.path.join(os.path.dirname(__file__), '..', '..')

eczoo_site_setup_yml = os.path.join(this_root_dir, 'eczoo_site_setup.yml')



with open(os.path.join(os.path.dirname(__file__), 'manual_code_renames.yml'), encoding='utf-8') as f:
    manual_code_renames = yaml.safe_load(f)


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
    branch = None # FULL HISTORY
    #
    #branch = '200b9c8' # DEBUG 0 - pretty long
    #branch = 'bcb27c6' # DEBUG 0.5 - medium-long
    #branch = '97b6405a1573507dc1b025b55eca19e3d27e9242' # DEBUG 1 - short-ish
    #branch = '09937ec' # DEBUG 2 - really short
    #

    eft = ExtractFromTree(Dirs.data_dir,
                          branch=branch,
                          manual_file_renames=manual_code_renames['file_renames'])

    eft.extract()

    code_contributors = eft.get_code_contributors()

    import pprint
    pprint.pprint(code_contributors)

    # print("File renames:")
    # print(eft.file_renames.dumps())
    # print()
    # print("Code ID renames:")
    # print(eft.code_id_renames.dumps())

    usebranchname = ''
    if branch is not None:
        usebranchname = f'-{branch}'

    os.makedirs('extracted', exist_ok=True)

    jsonfname = f'extracted/extracted_code_contributors{usebranchname}-{datetime.datetime.now().strftime("%Y%m%dT%H%M%S")}.json'
    with open(jsonfname, 'w', encoding='utf-8') as fw:
        json.dump(code_contributors, fw, indent=4)



# ------------------------------------------------------------------------------



class DiffWithRenames:
    def __init__(self, commit, parent, child=None):
        super().__init__()
        self.commit = commit
        self.parent = parent
        self.renames = {
            'files': {},
            'code_ids': {},
        }
        self.child = child

    def add_rename(self, what, old, new):
        self.renames[what][old] = new

    def apply_renames(self, what, name):
        child = self
        while child is not None:
            name = child.renames[what].get(name, name)
            child = child.child
        return name

    def __repr__(self):
        return f"<DiffWithRenames {getattr(self.parent,'hexsha','None')[:7]} → {getattr(self.commit, 'hexsha', None)[:7]}>"


_rx_code_id = re.compile(
    r'''^code_id:\s*(?P<openquote>['"]?)(?P<code_id>[a-zA-Z0-9_.-]+)(?P=openquote)\s*$''',
    flags=re.MULTILINE | re.IGNORECASE
)


class Contributor:
    def __init__(self, name, email):
        super().__init__()
        self.name = name
        self.email = email

        self._fields = ('name', 'email')

    def __repr__(self):
        return (
            f"{self.__class__.__name__}("
            + ", ".join( f"{k}={getattr(self, k)!r}" for k in self._fields )
            + ")"
        )



class MyFieldsJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if hasattr(obj, '_fields'):
            return { k: getattr(obj, k)
                     for k in obj._fields }
        return super().default(obj)



class ExtractFromTree:
    def __init__(self, repo_dir, branch=None, *, manual_file_renames=None):

        logger = logging.getLogger(__name__)

        super().__init__()
        self.repo_dir = repo_dir
        self.branch = branch

        # manual_file_renames = [ {hashdiff: [PARENTHASH,COMMITHASH], old: <old-fname>, new: <new-fname>}, ...]
        self.manual_file_renames = manual_file_renames

        self.manual_file_renames_x = {}
        for ri in (self.manual_file_renames or []):
            oldhash, newhash = ri['hashdiff']
            oldfn, newfn = ri['old'], ri['new']
            self.manual_file_renames_x.setdefault( (oldhash, newhash), {} )[oldfn] = newfn

        logger.debug(f"{self.manual_file_renames_x=}")

        self.repo = git.Repo(repo_dir)

        if self.branch is None:
            self.start_commit = self.repo.head.commit
        elif self.branch in self.repo.heads:
            self.start_commit = self.repo.heads[self.branch].commit
        else:
            self.start_commit = self.repo.commit(self.branch)

        self.collected_contribution_events = []

        self.diffswithrenames = {}


    def extract(self):

        logger = logging.getLogger(__name__)

        start_commit = self.start_commit
        
        # iter over ALL commits, not only those with changes to 'codes', so that
        # we can see the full tree of commit changes (for our renames/diffs)
        iter_commits = self.repo.iter_commits(start_commit)
        #iter_commits = self.repo.iter_commits(start_commit, max_count=500) # DEBUG

        diffxs_child = {}

        iter_commits = list(iter_commits)

        for commit_j, commit in enumerate(iter_commits):

            logger.info(f"Processing commit {commit_j}/{len(iter_commits)} -- {commit.hexsha}")

            self._process_commit(commit, diffxs_child)


    def _process_commit(self, commit, diffxs_child):

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

        for commit_parent in commit.parents:

            store_file_delete_new_info = {
                'new': [],
                'deleted': [],
            }

            diffx = DiffWithRenames(commit=commit, parent=commit_parent,
                                    child=diffxs_child.get(commit.hexsha,None))

            logger.debug(f"Setting up {diffx!r}")

            # by registering only the child the first time we encounter a
            # parent, we should heuristically follow the "main" branch when
            # splitting branch & merge paths
            diffxs_child.setdefault(commit_parent.hexsha, diffx)

            for diff in commit_parent.diff(commit, paths='codes'):

                d = self._process_diff(
                    diff, commit, commit_parent, contributor,
                    diffx=diffx,
                    store_file_delete_new_info=store_file_delete_new_info
                )

            #logger.debug(f"finally {store_file_delete_new_info=}")

            new_files_by_code_id = {
                fni['code_id']: fni['path']
                for fni in store_file_delete_new_info['new']
                if fni['code_id']
            }

            #logger.debug(f"also {new_files_by_code_id=}")

            for finfo in store_file_delete_new_info['deleted']:
                del_path, del_codeid = finfo['path'], finfo['code_id']
                if del_codeid in new_files_by_code_id:
                    # we found the file rename thanks to its code_id
                    diffx.add_rename(
                        'files',
                        del_path,
                        new_files_by_code_id[del_codeid]
                    )
                else:
                    # we don't know what this file was renamed to, or if it was
                    # simply deleted from the zoo.
                    diffx.add_rename(
                        'files',
                        del_path, f'DELETED-{commit.hexsha}-{del_path}'
                    )

            #logger.debug(f" --> diffx' file renames are {diffx.renames['files']}")


    def _process_diff(self, diff, commit, commit_parent, contributor, *,
                      diffx, store_file_delete_new_info):

        logger = logging.getLogger(__name__)
        logger.debug(f"Got diff for {diff.b_path}")

        commit_timestamp = commit.committed_date
        
        a_code_id = None
        b_code_id = None

        file_path = diff.b_path
        if file_path is None:
            file_path = diff.a_path # for a deleted file

        if not file_path.endswith('.yml'):
            logger.debug(f"Skipping diff for non-YAML file {file_path}")
            return

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
            diffx.add_rename('files', diff.a_path, diff.b_path)
            a_code_id = get_code_id_from_yml_data(commit_parent, diff.a_path)
            b_code_id = get_code_id_from_yml_data(commit, diff.b_path)

            logger.debug(f"code_id of renamed file is {a_code_id!r} → {b_code_id!r}")

        elif diff.deleted_file:
            logger.debug(f"File {diff.a_path!r} was deleted")
            file_path = diff.a_path
            a_code_id = get_code_id_from_yml_data(commit_parent, diff.a_path)

            oldhash, newhash = str(commit_parent.hexsha), str(commit.hexsha)

            #logger.debug(f"Checking for manual rename; {diff.a_path=},  {(oldhash, newhash)=}  {self.manual_file_renames_x=}")

            if diff.a_path in self.manual_file_renames_x.get( (oldhash, newhash), {} ):
                # rename was specified manually.
                b_path = self.manual_file_renames_x[ (oldhash, newhash) ][ diff.a_path ]
                b_code_id = get_code_id_from_yml_data(commit, b_path)

                diffx.add_rename('files', diff.a_path, b_path)
                if a_code_id != b_code_id:
                    diffx.add_rename('code_ids', a_code_id, b_code_id)

                logger.debug(f"Manual rename!  {diff.a_path} -> {b_path}   ({a_code_id} -> {b_code_id})")

            else:
                b_code_id = None

                store_file_delete_new_info['deleted'].append(
                    dict(path=diff.a_path, code_id=a_code_id)
                )
                #logger.debug(f"registered deleted file: {store_file_delete_new_info=}")

        else:
            assert diff.a_path == diff.b_path

            a_code_id = get_code_id_from_yml_data(commit_parent, diff.a_path)
            b_code_id = get_code_id_from_yml_data(commit, diff.b_path)

        if a_code_id is not None and b_code_id is not None and a_code_id != b_code_id:
            # there was a rename in the code ID as well.
            diffx.add_rename('code_ids', a_code_id, b_code_id)

        code_id = b_code_id
        if code_id is None:
            code_id = a_code_id

        # get precise word diff etc.  has_significant_diff will check all commit
        # parents so should be able to handle merges correctly.

        if has_significant_diff(self.repo, commit, diff.a_path, diff.b_path):

            self.collected_contribution_events.append(
                (commit, diffx, code_id, file_path, contributor)
            )


    def get_code_contributors(self):
        # process all code_id's and file_path's to apply any renames, and reduce
        # the contributors list.

        logger = logging.getLogger(__name__)

        start_commit = self.start_commit
        logger.debug(f"start_commit's commit is {start_commit}")

        code_contributors = {}

        for commit, diffx, code_id, file_path, contributor in \
            reversed(self.collected_contribution_events):
            #
            
            orig_file_path = file_path

            code_id = diffx.apply_renames('code_ids', code_id)
            file_path = diffx.apply_renames('files', file_path)

            try:
                blob = start_commit.tree[file_path]
            except KeyError:
                # Ignore if it's Victor, this happens for many files
                if contributor.email == f"{'valbert4'}@{'mg'[::-1]}{'lia'[::-1]+'.'+'com'}":
                    logger.debug(
                        f"Code file {file_path} no longer exists and could not be traced.  A "
                        f"contribution in commit {commit} on {orig_file_path} was authored by our own Victor."
                    )
                    continue
                logger.warning(
                    f"Code file {file_path} no longer exists and could not be traced.  A "
                    f"contribution in commit {commit} was authored by {contributor} on {orig_file_path}."
                )

                def diffwherefmt(dx):
                    return f"{dx.parent.hexsha[:7]} → {dx.commit.hexsha[:7]} https://github.com/errorcorrectionzoo/eczoo_data/compare/{dx.parent.hexsha[:7]}...{dx.commit.hexsha[:7]}"

                # DEBUG:
                infomsg = ["Traced rename events:",
                           f"    Contribution @ {diffwherefmt(diffx)}"]
                dx = diffx
                fn = orig_file_path
                while dx is not None:
                    #logger.debug(f"  @ {dx.commit.hexsha[:7]}")
                    if fn in dx.renames['files']:
                        fnnew = dx.renames['files'][fn]
                        if fnnew is None:
                            # specifically silenced the warning
                            infomsg.append( f"DELETED in {diffwherefmt(dx)}\n" )
                            logger.debug("\n".join(infomsg)) # display in debug
                            infomsg = []
                            break
                        if fnnew.startswith('DELETED-'):
                            infomsg.append(
                                f"    Deleted {diffwherefmt(dx)}\n"
                                f"    To create a manual code rename, use:\n"
                                f"--------\n"
                                f"  - hashdiff: [{dx.parent.hexsha}, {dx.commit.hexsha}]\n"
                                f"    old: {fn}\n"
                                f"    new: ???\n"
                                f"--------\n"
                                f"    Use the keyword ‘null’ for the ‘new:’ value to silently ignore this contribution.\n"
                            )
                            break

                        infomsg.append(
                            f"    Renamed {diffwherefmt(dx)}\n"
                            f"        {fn} → {fnnew}"
                        )
                        fn = fnnew
                    dx = dx.child
                if infomsg:
                    logger.info("\n".join(infomsg))
                continue

            key = f"{code_id}|{file_path}"

            if key not in code_contributors:
                code_contributors[key] = {
                    'code_id': code_id,
                    'file_path': file_path,
                    'contributors': [],
                }

            if contributor not in code_contributors[key]['contributors']:
                code_contributors[key]['contributors'].append( self.get_contributor_dict(contributor) )

        return code_contributors

    def get_contributor_dict(self, contributor):
        # TODO: Do cached requests to github's API to get the github user id
        return {
            'name': contributor.name,
            'email': contributor.email,
        }


# ------

def get_code_id_from_yml_data(commit, path):

    logger = logging.getLogger(__name__)

    try:
        # get the YML data at this revision
        ymlblob = commit.tree[path]
    except KeyError:
        # could be the file was deleted.
        logger.debug(f"Could not get YAML data for {path} in commit {commit.hexsha}")
        return None

    # NOTE: We don't use yaml.safe_load() because the file might have syntax
    # errors (yet we still would like to track contributions).  So we read out
    # the code_id by matching a single line that starts with "code_id: ...", see
    # the regular expression object `_rx_code_id`

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

    #logger.debug("the diff is:\n"+thediff)
    difflines = thediff.strip().split('\n')

    # logger.debug(f"{file_path_old=} {file_path_new=}")

    # logger.debug(f"{difflines=}")

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
        # logger.debug(f"Changes by {commit.author.name} to {file_path_new} on {commit} "
        #              f"are indeed significant! ({diffscore=})")
        return True

    # logger.debug(f"Changes by {commit.author.name} to {file_path_new} on {commit} "
    #              f"are not ruled as significant ({diffscore=})")
    return False


# ------------------------------------------------------------------------------

if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)

    # For DEBUG MESSAGES:
    #logging.getLogger().setLevel(logging.DEBUG)

    logging.getLogger('git.cmd').setLevel(logging.INFO)

    runmain()
