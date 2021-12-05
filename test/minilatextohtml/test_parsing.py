import logging
import unittest

from pylatexenc import latexwalker


class TestParsing(unittest.TestCase):

    def _get_lw(self, s):
        from minilatextohtml import _lw_context
        return latexwalker.LatexWalker(s, latex_context=_lw_context, tolerant_parsing=False)


    def test_simple_commands_1(self):
        lw = self._get_lw(r"""\emph{A}""")
        parsing_state = lw.make_parsing_state()
        emphl, _, _ = lw.get_latex_nodes(parsing_state=parsing_state)
        self.assertEqual(len(emphl), 1)
        self.assertEqual(emphl[0].macroname, 'emph')
        self.assertEqual(emphl[0].pos, 0)
        self.assertEqual(emphl[0].len, len(lw.s))

    def test_simple_commands_2(self):
        lw = self._get_lw(r"""XXXcharsXXX \href {https://example.com/-%2f-/+.\1}{testlink}""")
        parsing_state = lw.make_parsing_state()
        nodes, _, _ = lw.get_latex_nodes(parsing_state=parsing_state)
        self.assertEqual(len(nodes), 2)
        self.assertEqual(nodes[0].chars, 'XXXcharsXXX ')
        self.assertEqual(nodes[1].macroname, 'href')
        self.assertEqual(len(nodes[1].nodeargd.argnlist), 2)
        argnlist = nodes[1].nodeargd.argnlist
        self.assertEqual(len(argnlist[0].nodelist), 1)
        self.assertEqual(argnlist[0].nodelist[0].chars, r'https://example.com/-%2f-/+.\1')
        self.assertEqual(argnlist[1].nodelist[0].chars, 'testlink')

    def test_simple_commands_3(self):
        lw = self._get_lw(r"""\cite{man%ual:{Hi\%\emph{Hello!}}""")
        parsing_state = lw.make_parsing_state()
        nodes, _, _ = lw.get_latex_nodes(parsing_state=parsing_state)
        self.assertEqual(len(nodes), 1)
        self.assertEqual(nodes[0].macroname, 'cite')
        self.assertEqual(len(nodes[0].nodeargd.argnlist), 2) # null opt arg, one group node
        self.assertIsNone(nodes[0].nodeargd.argnlist[0])
        citenodelist = nodes[0].nodeargd.argnlist[1].nodelist
        self.assertEqual(len(citenodelist), 2)
        self.assertEqual(citenodelist[0].chars, 'man%ual:')
        assert citenodelist[1].isNodeType(latexwalker.LatexGroupNode)
        self.assertEqual(
            [n.latex_verbatim() for n in citenodelist[1].nodelist],
            [ 'Hi', r'\%', r'\emph{Hello!}' ]
        )
        self.assertEqual(citenodelist[1].nodelist[2].macroname, 'emph')
        self.assertEqual(citenodelist[1].nodelist[2].nodeargd.argnlist[0].nodelist[0].chars,
                         'Hello!')


if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    unittest.main()
