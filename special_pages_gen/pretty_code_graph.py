import os
import os.path
import json
import random



class PagePrettyCodeGraph:
    def __init__(self, *, site_gen_env, zoo, global_context, htmlpagescollection, **kwargs):
        super().__init__()

        self.site_gen_env = site_gen_env
        self.zoo = zoo
        self.global_context = global_context
        self.htmlpagescollection = htmlpagescollection

        self.dirs = self.site_gen_env.dirs

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
            'page_title': 'Error correction zoo code graph',
            'page_app_full_width': True,

            'extra_js': [
                'https://unpkg.com/@popperjs/core@2',
                #'https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.20.0/cytoscape.min.js',

                self.site_gen_env.prefix_base_url(
                    'pretty_code_graph_assets/pretty_code_graph.js'
                ),
                self.site_gen_env.prefix_base_url(
                    'pretty_code_graph_assets/pretty_code_graph_data.js'
                ),
            ],
            
            'extra_css': [
                self.site_gen_env.prefix_base_url(
                    'pretty_code_graph_assets/pretty_code_graph.css'
                ),
            ],

            **self.global_context
        }
        self.site_gen_env.compile_external_template(
            source_dir=self.page_source_data_dir,
            fn_template='pretty_code_graph.html',
            fn_output='pretty_code_graph.html',
            context=context
        )

        # our page-specific stylesheet
        self.site_gen_env.compile_sass(
            source_dir=self.page_source_data_dir,
            fn_source='pretty_code_graph.scss',
            fn_output='pretty_code_graph_assets/pretty_code_graph.css',
        )

        # copy our static JS code
        self.site_gen_env.copy_file(
            source_dir=self.page_source_data_dir,
            fn_source='pretty_code_graph.js',
            fn_target=self.page_output_assets_dir
        )


    def _gen_js_code(self, output_data_js_fname):

        all_codes_dict = self.zoo.all_codes()
        root_codes_dict = self.zoo.root_codes()

        nodes = []
        edges = []

        parent_rel_counter = 0
        cousin_rel_counter = 0

        root_codes_x_positions = {
            root_code_id: 100*j
            for (j, root_code_id) in enumerate(root_codes_dict.keys())
        }
        xpos_rnd_shift = lambda: random.randint(-40, 40)
        ypos_rnd_shift = lambda: random.randint(-30, 30)

        for code_id, code in all_codes_dict.items():

            short_description = code.description
            if short_description and len(short_description) > 200:
                short_description = short_description[:200-3]+'...',

            position = {}
            if code.family_root_code is not None:
                root_code_id = code.family_root_code.code_id
            else:
                root_code_id = code_id
            position['x'] = root_codes_x_positions[root_code_id] + xpos_rnd_shift()
            position['y'] = 100*code.family_generation_level + ypos_rnd_shift()

            nodes.append(
                {
                    'data': {
                        'id': f'c_{code_id}',
                        'label': code.name,

                        '_description': short_description,
                        '_code_href': self.htmlpagescollection.get_code_href(code_id),
                        '_family_generation_level': code.family_generation_level,
                    },
                    'position': dict(position),
                    # 'position': {
                    #     'x': random.randint(250,750),
                    #     'y': random.randint(200,400),
                    # },
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

        # fixed_node_constraint = [
        #     {
        #         'nodeId': f'c_{root_code_id}',
        #         'position': {
        #             'x': j*200,
        #             'y': (-1)**(j%2) * 100,
        #         }
        #     }
        #     for j, root_code_id in enumerate( self.zoo.root_codes().keys() )
        # ]
        fixed_node_constraint = []

        alignment_constraint = {
            # 'horizontal': [
            #     [
            #         f'c_{root_code_id}'
            #         for root_code_id in self.zoo.root_codes().keys()
            #     ]
            # ]
        }

        data = {
            'elements': {
                'nodes': nodes,
                'edges': edges,
            },
            'fixed_node_constraint': fixed_node_constraint,
            'alignment_constraint': alignment_constraint,
        }

        with open(output_data_js_fname, 'w') as fw:
            fw.write("pretty_code_graph_data = ")
            json.dump(data, fw, indent=4)
            fw.write(";")


