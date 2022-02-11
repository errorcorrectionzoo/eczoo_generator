import os
import os.path
import json
import random


import logging
logger = logging.getLogger(__name__)


def is_abstract_code(code):
    if not code['physical']: # or not code.logical: # e.g. 'bosonic code' kingdom
        return True
    return False

def node_id_code(code_id):
    return 'c_' + code_id


# explore parent relationship until we find a kingdom
def _find_kingdom_parent(code, kingdom_ids):
    parents_this_level = [ code ]
    while parents_this_level:
        m = next( (cobj
                   for cobj in parents_this_level
                   if cobj.code_id in kingdom_ids),
                  None )
        if m:
            return m
        # go one level up
        parents_this_level = [
            prel.code
            for cobj in parents_this_level
            for prel in cobj.relations.parents
        ]
    return None


class PagePrettyCodeGraph:
    def __init__(self, *,
                 site_gen_env,
                 zoo,
                 global_context,
                 htmlpagescollection,
                 eczoo_domains,
                 **kwargs):
        super().__init__()

        self.site_gen_env = site_gen_env
        self.zoo = zoo
        self.global_context = global_context
        self.htmlpagescollection = htmlpagescollection
        self.eczoo_domains = eczoo_domains

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
            fn_output='code_graph.html',
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
        #root_codes_dict = self.zoo.root_codes()

        nodes = []
        edges = []

        domain_rel_counter = 0
        parent_rel_counter = 0
        cousin_rel_counter = 0

        domain_and_kingdom_by_kingdom_code_id = {
            kingdom['code_id']: (domain, kingdom)
            for domain in self.eczoo_domains
            for kingdom in domain['kingdoms']
        }

        all_kingdoms = [
            {
                'domain': domain,
                'kingdom': kingdom,
                'kingdom_code': kingdom['code'],
            }
            for domain in self.eczoo_domains
            for kingdom in domain['kingdoms']
        ]

        domain_nodes = []

        kingdoms_positions = {}
        
        kingdom_sep = 100
        domains_extra_sep = 300

        max_kingdoms_per_domain = max([ len(domain['kingdoms'])
                                        for domain in self.eczoo_domains ])
        #logger.debug(f"{max_kingdoms_per_domain=}")

        # add the domain nodes
        num_domains = len(self.eczoo_domains)
        domains_sep = (domains_extra_sep + max_kingdoms_per_domain * kingdom_sep)
        shift_x = 0 #((num_domains-1)/2) * domains_sep
        for j_domain, domain in enumerate(self.eczoo_domains):
            dom_pos = {
                'x': int(
                    shift_x + (j_domain - (num_domains-1)/2) * domains_sep
                ),
                'y': 0,
            }
            n = {
                'data': {
                    'id': f"domain_{domain['domain_id']}",
                    'label': domain['name'].text,
                    '_description': domain['description'].text,
                    
                    '_is_domain': 1,
                    '_page_href':
                        self.site_gen_env.prefix_base_url(domain['htmlpage'].path()),
                },
                'position': dom_pos,
                #'locked': True, # still let user move these nodes
            }
            domain_nodes.append(n)
            nodes.append(n)
            
            domain_id = domain['domain_id']

            kingdoms_positions[domain_id] = {}

            num_kingdoms = len(domain['kingdoms'])
            for j_kingdom, kingdom in enumerate(domain['kingdoms']):
                kingdompos = {
                    'x': int(
                        shift_x + dom_pos['x'] + kingdom_sep * (j_kingdom - num_kingdoms/2)
                    ),
                    'y': 100
                }
                kingdoms_positions[kingdom['code_id']] = kingdompos


        code_nodes = []

        parent_relationships = []

        outside_pos_counter = 0

        for code_id, code in all_codes_dict.items():

            short_description = code['description'].text
            if short_description and len(short_description) > 200:
                short_description = short_description[:200-3]+'...',

            # position = {}
            # if code.family_root_code is not None:
            #     root_code_id = code.family_root_code.code_id
            # else:
            #     root_code_id = code_id
            # position['x'] = root_codes_x_positions[root_code_id] + xpos_rnd_shift()
            # position['y'] = 100*code.family_generation_level + ypos_rnd_shift()

            code_is_abstract = is_abstract_code(code)

            if code_id in domain_and_kingdom_by_kingdom_code_id:
                is_kingdom = True
                (this_kingdoms_domain, kingdom) = \
                    domain_and_kingdom_by_kingdom_code_id[code_id]

                kingdom_parent_code = None
                kingdom_parent_code_id = None
                parent_domain = None
                parent_kingdom = None

                pos = kingdoms_positions[code_id]

            else:
                is_kingdom = False
                this_kingdoms_domain = None
                kingdom = None

                kingdom_parent_code = _find_kingdom_parent(
                    code,
                    domain_and_kingdom_by_kingdom_code_id.keys()
                )
                if kingdom_parent_code is not None:
                    kingdom_parent_code_id = kingdom_parent_code.code_id

                    parent_domain, parent_kingdom = domain_and_kingdom_by_kingdom_code_id[
                        kingdom_parent_code.code_id
                    ]

                    pos = {
                        'x': kingdoms_positions[kingdom_parent_code_id]['x'],
                        'y': 120*code.family_generation_level,
                    }
                elif code_is_abstract:
                    pos = {
                        'x': shift_x,
                        'y': -300 - 5*outside_pos_counter,
                    }
                else:
                    pos = {
                        'x': int(
                            shift_x - domains_sep*((num_domains-1)/2) - 10*outside_pos_counter
                        ),
                        'y': 500 + 5*outside_pos_counter,
                    }


            n = {
                'data': {
                    'id': node_id_code(code_id),
                    'label': code.name.text,

                    '_is_code': 1,
                    '_is_abstract_code': \
                        1 if code_is_abstract else 0,
                    '_description': short_description,
                    '_code_href': self.htmlpagescollection.get_code_href(code_id),
                    '_family_generation_level': code.family_generation_level,
                },
                'position': pos,
            }
            if is_kingdom:
                n['data'].update({
                    '_is_kingdom': 1,
                    '_kingdom_name': kingdom['name'].text,
                    '_kingdom_href': self.site_gen_env.prefix_base_url(
                        kingdom['htmlpage'].path()),
                })
            code_nodes.append(n)
            nodes.append(n)

            # connect to domain, if relevant
            if is_kingdom:
                the_domain_id = this_kingdoms_domain['domain_id']
                kingdomtodomain_edge_id = \
                    f"kingdomtodomain_{code_id}_{the_domain_id}_{domain_rel_counter}"
                edges.append(
                    {
                        'data': {
                            'id': kingdomtodomain_edge_id,
                            #'label': f'domain',
                            '_rel_type': 'domain',

                            'source': node_id_code(code_id),
                            'target': f"domain_{the_domain_id}",
                        }
                    }
                )
                domain_rel_counter += 1

            for parent in code.relations.parents:
                edge_id = f'parent_{code_id}_{parent.code.code_id}_{parent_rel_counter}'
                edges.append(
                    {
                        'data': {
                            'id': edge_id,
                            #'label': f'parent',
                            '_rel_type': 'parent',

                            'source': node_id_code(code_id),
                            'target': node_id_code(parent.code.code_id),
                        }
                    }
                )
                parent_rel_counter += 1

                parent_relationships.append({
                    'edge_id': edge_id,
                    'source_code_obj': code,
                    'target_code_obj': parent.code,
                })


            for cousin in code.relations.cousins:
                edge_id = f'cousin_{code_id}_{cousin.code.code_id}__{cousin_rel_counter}'
                edges.append(
                    {
                        'data': {
                            'id': edge_id,
                            #'label': f'cousin',
                            '_rel_type': 'cousin',

                            'source': node_id_code(code_id),
                            'target': node_id_code(cousin.code.code_id),
                        }
                    }
                )
                cousin_rel_counter += 1

        fixed_node_constraint = [
            {
                'nodeId': dom_node['data']['id'],
                'position': dict(dom_node['position']),
            }
            for dom_node in domain_nodes
        ]

        alignment_constraint = {
            'horizontal': [
                [
                    node_id_code(kdic['kingdom_code'].code_id)
                    for kdic in all_kingdoms
                ]
            ]
        }

        first_domain_node_id = domain_nodes[0]['data']['id']

        relative_placement_constraint = []

        for n in code_nodes:
            # all concrete codes must appear below domains (including kingdoms)
            if not n['data']['_is_abstract_code']:
                gap = 200
                if n['data'].get('_is_kingdom'):
                    gap = 100 # kingdoms get to go closer to the domains
                relative_placement_constraint.append({
                    'top': first_domain_node_id,
                    'bottom': n['data']['id'],
                    'gap': gap
                })
            # but all abstract codes must appear ABOVE domains
            else:
                relative_placement_constraint.append({
                    'bottom': first_domain_node_id,
                    'top': n['data']['id'],
                    'gap': 100
                })
            pass

        # all parent relations should point upwards (even between abstract code parents)
        for prel in parent_relationships:
            if is_abstract_code(prel['source_code_obj']) \
               and not is_abstract_code(prel['target_code_obj']):
                # allow pointing downwards if an abstract code has a concrete
                # code as a parent (e.g., a kingdom).
                #
                # FIXME: We need to define what the concept of an abstract code
                # is.  Is it that it doesn't have a physical space defined, or
                # is it that it doesn't belong to a kingdom?
                continue

            relative_placement_constraint.append( {
                'top': node_id_code(prel['target_code_obj'].code_id),
                'bottom': node_id_code(prel['source_code_obj'].code_id),
                'gap': 100,
            } )

        data = {
            'elements': {
                'nodes': nodes,
                'edges': edges,
            },
            'fixed_node_constraint': fixed_node_constraint,
            'alignment_constraint': alignment_constraint,
            'relative_placement_constraint': relative_placement_constraint,
        }

        with open(output_data_js_fname, 'w', encoding='utf-8') as fw:
            fw.write("GENERATED_pretty_code_graph_data = ")
            json.dump(data, fw, indent=4)
            fw.write(";")


