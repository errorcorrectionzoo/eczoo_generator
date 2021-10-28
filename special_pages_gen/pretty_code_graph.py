import os
import os.path
import json



class PagePrettyCodeGraph:
    def __init__(self, *, jinja2env, zoo, global_context, htmlpagescollection, **kwargs):
        super().__init__()

        self.jinja2env = jinja2env
        self.zoo = zoo
        self.global_context = global_context
        self.htmlpagescollection = htmlpagescollection

        self.dirs = self.jinja2env.dirs

        self.page_source_data_dir = os.path.join(os.path.dirname(__file__),
                                                 'pretty_code_graph_data')
        self.page_output_assets_dir = os.path.join(self.dirs.output_dir,
                                                   'pretty_code_graph_assets')

    def generate(self):

        os.makedirs(self.page_output_assets_dir,
                    exist_ok=True)

        # prepare graph data
        self._gen_js_code(
            output_data_js_fname=os.path.join(self.page_output_assets_dir,
                                              'pretty_code_graph_data.js')
        )

        # page template
        context = {
            'page_title': 'Code Graph [error correction zoo]',
            'page_app_full_width': True,

            'extra_js': [
                'https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.20.0/cytoscape.min.js',
                # inclusion is done in the HTML page, see pretty_code_graph.html
                #'https://unpkg.com/@popperjs/core@2',
                #'https://unpkg.com/tippy.js@6',
                self.jinja2env.prefix_base_url('pretty_code_graph_assets/pretty_code_graph.js'),
                self.jinja2env.prefix_base_url('pretty_code_graph_assets/pretty_code_graph_data.js'),
            ],
            
            'extra_css': [
                self.jinja2env.prefix_base_url('pretty_code_graph_assets/pretty_code_graph.css'),
            ],

            **self.global_context
        }
        self.jinja2env.compile_single_template(
            source_dir=self.page_source_data_dir,
            fn_template='pretty_code_graph.html',
            fn_output='pretty_code_graph.html',
            context=context
        )

        # our page-specific stylesheet
        self.jinja2env.compile_sass(
            source_dir=self.page_source_data_dir,
            fn_source='pretty_code_graph.scss',
            fn_output='pretty_code_graph_assets/pretty_code_graph.css',
        )

        # copy our static JS code
        self.jinja2env.copy_file(
            source_dir=self.page_source_data_dir,
            fn_source='pretty_code_graph.js',
            fn_target=self.page_output_assets_dir
        )


    def _gen_js_code(self, output_data_js_fname):

        all_codes_dict = self.zoo.all_codes()

        nodes = []
        edges = []

        parent_rel_counter = 0
        cousin_rel_counter = 0

        for code_id, code in all_codes_dict.items():

            short_description = code.fields.get('description')
            if short_description and len(short_description) > 200:
                short_description = short_description[:200-3]+'...',

            nodes.append(
                {
                    'data': {
                        'id': f'c_{code_id}',
                        'label': code.name,

                        '_description': short_description,
                        '_code_href': self.htmlpagescollection.get_code_href(code_id),
                    }
                }
            )

            for parent in code.relations.parents:
                edge_id = f'parent_{code_id}_{parent.code.code_id}_{parent_rel_counter}'
                edges.append(
                    {
                        'data': {
                            'id': edge_id,
                            'label': f'parent',
                            '_rel_type': 'parent',

                            'source': f'c_{code_id}',
                            'target': f'c_{parent.code.code_id}',
                        }
                    }
                )
                parent_rel_counter += 1

            for cousin in code.relations.cousins:
                edge_id = f'cousin_{code_id}_{parent.code.code_id}_{cousin_rel_counter}'
                edges.append(
                    {
                        'data': {
                            'id': edge_id,
                            'label': f'cousin',
                            '_rel_type': 'cousin',

                            'source': f'c_{code_id}',
                            'target': f'c_{cousin.code.code_id}',
                        }
                    }
                )
                cousin_rel_counter += 1

        elements = {
            'nodes': nodes,
            'edges': edges
        }

        with open(output_data_js_fname, 'w') as fw:
            fw.write("pretty_code_graph_data = { elements: ")
            json.dump(elements, fw, indent=4)
            fw.write("};")


