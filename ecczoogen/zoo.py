import os
import os.path

import yaml

import logging
logger = logging.getLogger(__name__)


from . import code, code_collection, schemaloader



_junk_files = (
    '.DS_Store',
    '.gitignore',
)

_accessory_ignore_exts = (
    '.tex',
    '.pdf',
    '.aux',
    '.log',
    '.dvi',
    '.xcf',
    '.ai',
    '.indd',
    '.afdesign',
    '.afpub',
)


class Zoo:
    def __init__(self, *, dirs, schema_loader, eczllm_environment):
        super().__init__()

        codes_dir = dirs.codes_dir

        # make into a tuple; remove empty suffix if present
        fig_exts = eczllm_environment.get_figure_filename_extensions()

        self._collection = code_collection.CodeCollection()

        code_full_schema = schema_loader.get_full_schema('ecc')

        logger.info("Building the zoo ...")

        if not os.path.exists(codes_dir):
            raise RuntimeError(f"Folder ‘{codes_dir}’ doesn't exist!")

        for (dirpath, dirnames, filenames) in os.walk(codes_dir, followlinks=True):
            show_dirpath = os.path.relpath(dirpath)

            logger.info(f"Scanning for code YAML files (.yml) in ‘{show_dirpath}’ ...")

            for filename in filenames:
                fullfname = os.path.join(dirpath, filename)

                if os.path.basename(fullfname) in _junk_files \
                   or fullfname.endswith('~') or fullfname.endswith('.bak'):
                    # okay, backup file, we can skip
                    logger.debug(f"Skipping junk file {show_dirpath}/{filename}")
                    continue

                if fullfname.endswith( _accessory_ignore_exts ):
                    logger.debug(f"Skipping accessory file {show_dirpath}/{filename}")
                    continue

                if fullfname.endswith( fig_exts ):
                    logger.debug(f"Skipping figure {show_dirpath}/{filename}")
                    continue

                if fullfname.endswith('.yml'):

                    source_info_filename = os.path.relpath(fullfname, start=codes_dir)

                    logger.debug(f"Loading code file ‘{filename}’ ...")
                    with open(os.path.join(codes_dir, fullfname), 'r', encoding='utf-8') as f:
                        try:
                            code_info = yaml.safe_load(f)
                        except Exception as e:
                            logger.error(f"Failed to parse YAML file ‘{filename}’:\n{e}\n\n")
                            raise

                    try:
                        codeobj = code.Code(
                            code_info,
                            full_schema=code_full_schema,
                            source_info_filename=source_info_filename,
                            eczllm_environment=eczllm_environment,
                        )
                    except Exception as e:
                        logger.error(
                            f"Error constructing code from YAML file ‘{filename}’:\n{e}\n\n"
                        )
                        raise

                    self._collection.add_code( codeobj )
                    
                    continue


                msg = (
                    f"All files in the code data tree must have the suffix '.yml' to "
                    f"indicate that they are YaML files. "
                    f"Offending file: ‘{show_dirpath}/{filename}’."
                )
                logger.error(msg)
                raise ValueError(msg)

        logger.info(f"Finalizing code collection ...")

        self._collection.finish()

    #
    # Only expose a subset of the CodeCollection's API.  E.g., prevent the user
    # from adding more codes, etc.
    #
    # For this reason, I don't think the Zoo object should inherit from
    # CodeCollection.
    #

    def all_codes(self, *args, **kwargs):
        return self._collection.all_codes(*args, **kwargs)

    def root_codes(self, *args, **kwargs):
        return self._collection.root_codes(*args, **kwargs)

    def get_code(self, *args, **kwargs):
        return self._collection.get_code(*args, **kwargs)

    def get_code_or_None(self, *args, **kwargs):
        try:
            return self.get_code(*args, **kwargs)
        except code_collection.InvalidCodeReference:
            return None


    # def get_code_ids_by_physical_logial(self, *args, **kwargs):
    #     return self._collection.get_code_ids_by_physical_logial(*args, **kwargs)

    def get_code_family_tree(self, *args, **kwargs):
        return self._collection.get_code_family_tree(*args, **kwargs)


    def generate_stats(self, domains, stats):

        statsgen = _ZooStatsGenerator(self, domains)

        result_stats = []

        for (stat_name, stat_args) in stats:

            logger.debug(f"Generating stat {stat_name} with {stat_args!r}")
            
            result_stats += getattr(statsgen, stat_name)(*stat_args)
            
        return result_stats


class _ZooStatsGenerator:
    def __init__(self, zoo, domains):
        self.zoo = zoo
        self.domains = domains

    def total_num_codes(self, label):
        return [ (len(self.zoo.all_codes()), label) ]

    def total_num_domains(self, label):
        return [ (len(self.domains), label) ]

    def total_num_kingdoms(self, label):
        return [ (sum( len(d['kingdoms']) for d in self.domains ), label) ]

    def domain_ids_and_codetypes(self, *list_domain_ids_and_codetypes):

        # first, generate a dict with all codes by domain
        all_codes_by_domain = {}
        codes_seen = set()
        for domain in self.domains:
            domain_id = domain['domain_id']
            all_codes_by_domain[domain_id] = []
            for kingdom in domain['kingdoms']:
                for kc in self.zoo.get_code_family_tree(kingdom['code_id']):
                    if kc.code_id in codes_seen:
                        continue
                    all_codes_by_domain[domain_id].append(kc)
                    codes_seen.add(kc.code_id)
        # now seek out all remaining codes that didn't belong to a specific domain
        all_codes_by_domain[None] = []
        for ac_code_id, ac in self.zoo.all_codes().items():
            if ac_code_id in codes_seen:
                continue
            all_codes_by_domain[None].append(ac)
            codes_seen.add(ac_code_id)

        #logger.debug(f"{all_codes_by_domain=!r}")

        # --- 

        return [
            ( len(all_codes_by_domain[domain_id]), codetype )
            for domain_id, codetype in list_domain_ids_and_codetypes
        ]
    
    
    def code_familyhead_ids_and_codetypes(self, *list_code_familyhead_ids_and_codetypes):
        thestats = []
        for code_id, codetype in list_code_familyhead_ids_and_codetypes:
            code = self.zoo.get_code_or_None(code_id)
            if code is None:
                continue
            thestats.append(
                ( len( self.zoo.get_code_family_tree(code_id) ) - 1, codetype )
            )
        return thestats
