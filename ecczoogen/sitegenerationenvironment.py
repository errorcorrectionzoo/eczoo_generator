import os.path
import shutil
import logging
logger = logging.getLogger(__name__)

import sass

import jinja2

#
# Extended Environment with Jinja2
#

class SiteGenerationEnvironment:
    def __init__(self, jinja2env, base_url, dirs):
        super().__init__()
        self.jinja2env = jinja2env
        self.base_url = base_url
        self.dirs = dirs

    def prefix_base_url(self, path):
        return self.base_url + path

    def copy_file(self, *, source_dir, fn_source, fn_target):
        
        if source_dir is None:
            full_src_path = fn_source
        else:
            full_src_path = os.path.join(source_dir, fn_source)
        logger.info(f"Copying file "
                    f"‘{os.path.relpath(full_src_path, start=self.dirs.root_dir)}’ "
                    f"→ ‘{fn_target}’")
        shutil.copy2(full_src_path, os.path.join(self.dirs.output_dir, fn_target))

    def copy_tree(self, *, source_dir, target_dir, only_exts=None):
        
        def do_copy(fn_src, fn_dest):
            if only_exts and not fn_src.endswith( only_exts ):
                return
            logger.info(f"Copying ‘{os.path.relpath(fn_src, start=self.dirs.root_dir)}’ "
                        f"→ ‘{os.path.relpath(fn_dest, start=self.dirs.output_dir)}’")
            shutil.copy(fn_src, fn_dest)

        shutil.copytree(source_dir, os.path.join(self.dirs.output_dir, target_dir),
                        copy_function=do_copy, dirs_exist_ok=True)

        # source_dir=Dirs.static_assets_dir,
        # target_dir='static/',
        # only_exts=static_asset_exts,


    def compile_tree(self, *, source_dir, target_dir, compile_function):

        shutil.copytree(source_dir, os.path.join(self.dirs.output_dir, target_dir),
                        copy_function=compile_function, dirs_exist_ok=True)



    def compile_sass(self, *, source_dir, fn_source, fn_output):

        full_src_path = os.path.join(source_dir, fn_source)

        logger.info(f"Compiling SASS → CSS "
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
        with open(os.path.join(self.dirs.output_dir, fn_output), 'w', encoding='utf-8') as f:
            f.write("/* Automatically generated file. Changes will be overwritten. */\n")
            f.write(css_source)


    def compile_template(self, *, fn_template, fn_output, context={}):

        logger.info(f"Compiling template ‘{fn_template}’ → ‘{fn_output}’")

        output_fname = os.path.join(self.dirs.output_dir, fn_output)

        try:
            pg_template = self.jinja2env.get_template(fn_template)
            rendered_output = pg_template.render(context)
        except Exception as e:
            logger.error(f"Error compiling template: {e}", exc_info=True)
            raise

        # create any parent directories, as necessary
        os.makedirs(os.path.dirname(output_fname), exist_ok=True)

        with open(output_fname, 'w', encoding='utf-8') as fw:
            fw.write( rendered_output )


    def compile_external_template(self, *, source_dir, fn_template, fn_output,
                                  context={}):

        full_src_path = os.path.join(source_dir, fn_template)
        logger.info(f"Compiling external template "
                    f"‘{os.path.relpath(full_src_path, start=self.dirs.root_dir)}’ "
                    f"→ ‘{fn_output}’")

        output_fname = os.path.join(self.dirs.output_dir, fn_output)

        with open(full_src_path, encoding='utf-8') as f:
            pg_source = f.read()

        try:
            pg_template = self.jinja2env.from_string(pg_source)
            rendered_output = pg_template.render(context)
        except Exception as e:
            logger.error(f"Error compiling template: {e}", exc_info=True)
            raise

        # create any parent directories, as necessary
        os.makedirs(os.path.dirname(output_fname), exist_ok=True)

        with open(output_fname, 'w', encoding='utf-8') as fw:
            fw.write(rendered_output)


    def create_file_with_contents(self, contents, *, fn_output):

        output_fname = os.path.join(self.dirs.output_dir, fn_output)

        with open(output_fname, 'w', encoding='utf-8') as fw:
            fw.write(rendered_output)
