from git import Repo
from yaml.loader import SafeLoader
from ecczoogen import zoo, schemaloader
from github import Github
import os
import yaml

# Github API rate limit https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting
ECZOO_DATA_FOLDER = "../../../eczoo_data"
GITHUB_ACCESS_TOKEN = "your access token" # Guide at https://catalyst.zoho.com/help/tutorials/githubbot/generate-access-token.html

# dictionary of code_id -> list of author info dictionaries
codes_contributors_information = {}
email_github_login = {}

def get_is_change_significant(yml_file_path, commit_id):
    # logic to detect whether a change was substantial (to be listed as a contributor) is
    # coded here. A "substantial contribution" means basically more than fixing a
    # few typos.
    # This function's parameters should include at least the YML file name and
    # the commit id, so we can call "git --word-diff=porcelain"
    # TODO: for future ticket
    # git_log_result = repo.git.diff("--word-diff=porcelain", f"{commit_id}~", commit_id, "--", yml_file_path)
    # print(git_log_result)
    return True

def get_yml_file_content(yml_file_path):
    file_path = os.path.join(ECZOO_DATA_FOLDER, yml_file_path)
    if os.path.exists(file_path):
        with open(file_path) as f:
            yml_content = yaml.load(f, Loader=SafeLoader)
            return yml_content
    else:
        return None

def write_yml_file_content(yml_file_path, yml_content):
    with open(os.path.join(ECZOO_DATA_FOLDER, os.path.join("codes", yml_file_path)), "w") as f:
        yaml.dump(yml_content, f)


def resolve_github_username(email, commit_id):
    if email not in email_github_login:
        try :
            commit = eczoo_data_repo.get_commit(sha=commit_id)
            email_github_login["email"] = commit.author.login
        except Exception:
            email_github_login["email"]  = ""

    return email_github_login["email"]

github = Github(GITHUB_ACCESS_TOKEN)
eczoo_data_repo = github.get_repo("errorcorrectionzoo/eczoo_data")

repo = Repo(ECZOO_DATA_FOLDER)
# chronological order
commits = list(repo.iter_commits("main", paths="codes", reverse=True))
for c in commits:

    author_information = {
        "githubusername": resolve_github_username(c.author.email, c.hexsha),
        "name": c.author.name,
    }

    for yml_file_path in c.stats.files:
        if yml_file_path.startswith("codes/") and yml_file_path.endswith(".yml"):
            yml_file_content = get_yml_file_content(yml_file_path)
            code_id = yml_file_content["code_id"] if yml_file_content and "code_id" in yml_file_content else None
            if code_id:
                is_change_significant = get_is_change_significant(yml_file_path, c.hexsha)
                if is_change_significant and code_id not in codes_contributors_information:
                    codes_contributors_information.setdefault(code_id, []).append(
                        author_information
                    )

class Dirs:
    codes_dir = os.path.join(os.path.abspath(ECZOO_DATA_FOLDER), "codes")
schema_loader = schemaloader.SchemaLoader(schemas_dir=os.path.join("./../../", "schemas"))
zoo = zoo.Zoo(dirs=Dirs, schema_loader=schema_loader, fig_exts=["", ".svg", "png", "jpeg", "jpg"])

for code_id in codes_contributors_information:
    # fetch the YML file associated with the code ID (available through via
    # ecczoogen, from the generator code)
    code_yml_file = zoo.get_code(code_id).source_info_filename
    yml_content = get_yml_file_content(os.path.join("codes", code_yml_file))

    if not "meta_" in yml_content:
        yml_content["meta_"] = []

    found_existing_contributors_in_yml = False
    for index, key in enumerate(yml_content["meta_"]):
        if "contributors" in key:
            yml_content["meta_"][index]["contributors"] = (
                yml_content["meta_"][index]["contributors"]
                + codes_contributors_information[code_id]
            )
            found_existing_contributors_in_yml = True
            break

    if not found_existing_contributors_in_yml:
        yml_content["meta_"].append({"contributors": codes_contributors_information[code_id]})

    write_yml_file_content(code_yml_file, yml_content)
