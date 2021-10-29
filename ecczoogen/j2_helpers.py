import os.path
import shutil
import logging
logger = logging.getLogger(__name__)

import sass

import jinja2

#
# Extended Environment with Jinja2
#

class ExtendedJinja2Environment(jinja2.Environment):
    def __init__(self, base_url, dirs, **kwargs):
        super().__init__(**kwargs)
        self.base_url = base_url
        self.dirs = dirs

    def prefix_base_url(self, path):
        return self.base_url + path

    def copy_file(self, *, source_dir, fn_source, fn_target):
        
        full_src_path = os.path.join(source_dir, fn_source)
        logger.debug(f"Copying file "
                     f"‘{os.path.relpath(full_src_path, start=self.dirs.root_dir)}’ "
                     f"→ ‘{os.path.relpath(fn_target, start=self.dirs.output_dir)}’")
        shutil.copy2(full_src_path, os.path.join(self.dirs.output_dir, fn_target))

    def copy_tree(self, *, source_dir, target_dir, only_exts=None):
        
        def do_copy(fn_src, fn_dest):
            if only_exts and not fn_src.endswith( only_exts ):
                return
            logger.debug(f"Copying ‘{os.path.relpath(fn_src, start=self.dirs.root_dir)}’ "
                         f"→ ‘{os.path.relpath(fn_dest, start=self.dirs.output_dir)}’")
            shutil.copy(fn_src, fn_dest)

        shutil.copytree(source_dir, os.path.join(self.dirs.output_dir, target_dir),
                        copy_function=do_copy, dirs_exist_ok=True)

        # source_dir=Dirs.static_assets_dir,
        # target_dir='static/',
        # only_exts=static_asset_exts,


    def compile_sass(self, *, source_dir, fn_source, fn_output):

        full_src_path = os.path.join(source_dir, fn_source)

        logger.debug(f"Compiling SASS → CSS "
                     f"‘{os.path.relpath(full_src_path, start=self.dirs.root_dir)}’ "
                     f"→ ‘{fn_output}’")

        css_source = sass.compile(
            filename=full_src_path,

            output_style='expanded',
            #output_style='compressed',
            
            include_paths=[source_dir, self.dirs.stylesheets_dir],
            custom_functions={
                'prebaseurl': (lambda x: self.prefix_base_url(x))
            }
        )
        with open(os.path.join(self.dirs.output_dir, fn_output), 'w') as f:
            f.write(css_source)


    def compile_single_template(self, *, source_dir, fn_template, fn_output,
                                context={}):

        full_src_path = os.path.join(source_dir, fn_template)
        logger.debug(f"Compiling template "
                     f"‘{os.path.relpath(full_src_path, start=self.dirs.root_dir)}’ "
                     f"→ ‘{fn_output}’")

        with open(full_src_path) as f:
            pg_source = f.read()

        pg_template = self.from_string(pg_source)

        with open(os.path.join(self.dirs.output_dir, fn_output), 'w') as fw:
            fw.write( pg_template.render(context) )
