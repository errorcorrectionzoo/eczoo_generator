import re
import os.path
import git
import yaml

import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..'))

from ecczoogen import schemaloader


this_root_dir = os.path.join(os.path.dirname(__file__), '..', '..')

eczoo_site_setup_yml = os.path.join(this_root_dir, 'eczoo_site_setup.yml')

def runmain():

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

    schema_loader = schemaloader.SchemaLoader(schemas_dir=Dirs.schemas_dir)

    # 
    collected_contributors = extract_tree(Dirs.data_dir, schema_loader,)



_rx_code_id = re.compile(
    r'''^code_id:\s*(?P<openquote>['"]?)(?P<code_id>[a-zA-Z0-9_.-]+)(?=openquote)\s*$''',
    flags=re.MULTILINE|re.IGNORECASE
)

def extract_tree(repo_dir, schema_loader):

    # dictionary of  '(code_id, repo_file_path)' => {contributor information}
    collected_contributors = {}

    repo = git.Repo(repo_dir)
    assert not repo.bare

    for commit in repo.iter_commits(paths='codes',): #reverse=True):
        
        contributor = {
            'name': commit.author.name,
            'email': commit.author.email,
        }

        print(f"Exploring commit {commit!r}")

        # Let's see all the code YaML files that were modified
        
        for file_path, stat_dict in commit.stats.files.items():

            print(f"File changed in this commit: {file_path=}, {stat_dict=}")

            if file_path.endswith(".yml"):
                #
                # got a code YML file
                #
                
                # file_path is e.g. 'codes/bits_into_bits/binary_linear.yml'
                
                # parse the YML file at this revision
                ymlblob = commit.tree[file_path]
                ymldata = ymlblob.data_stream.read().decode('utf-8')

                # don't use yaml.load() in case the YAML is invalid (syntax
                # errors).  Instead use a cheap regex
                code_id = None
                rxm = _rx_code_id.search(ymldata)
                if rxm is not None:
                    code_id = rxm.group('code_id')

                k = (code_id, file_path)

                # get diff -- 
                if has_significant_diff(repo, commit, file_path):
                    collected_contributors.setdefault(k, [])
                    
                    if contributor not in collected_contributors[k]:
                        collected_contributors[k].append( contributor )

        print(f"{collected_contributors=}")
        return


def has_significant_diff(repo, commit, file_path):
    if not commit.parents:
        return True
    thediff = repo.git.diff(commit.hexsha, commit.parents[0].hexsha, '--', file_path,
                            word_diff='porcelain', unified=0,
                            word_diff_regex=r'[a-zA-Z0-9()_-]+')
    print(f"thediff=\n{thediff}")
    return True



if __name__ == '__main__':
    runmain()
