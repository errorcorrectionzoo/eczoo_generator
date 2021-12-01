import logging
import unittest

from pylatexenc import latexwalker

import minilatextohtml



class TestToHtml(unittest.TestCase):

    def _to_html(self, s):
        return minilatextohtml.ToHtmlConverter(refcontext=None).to_html(s)

    def test_simple_1(self):
        
        self.assertEqual(
            self._to_html(r"""\emph{italic}"""),
            r"""<span class="emph">italic</span>"""
        )

    def test_disp_math(self):
        
        self.assertEqual(
            self._to_html(r"""
Some text here.
\[
  \alpha = \sup\left\{ z: z\in\mathcal{Y} \right\}\ .
\]
More text here."""),
            r"""
Some text here.
<span class="display-math">\[
  \alpha = \sup\left\{ z: z\in\mathcal{Y} \right\}\ .
\]</span>
More text here."""
        )

 
    def test_disp_eqn(self):
        
        self.assertEqual(
            self._to_html(r"""
Some text here.
\begin{align}
  \alpha = \sup\left\{ z: z\in\mathcal{Y} \right\}\ .
  \label{eq:some-equation}
\end{align}
More text here."""),
            r"""
Some text here.
<span id="eq--some-equation" class="display-math env-align">\begin{align}
  \alpha = \sup\left\{ z: z\in\mathcal{Y} \right\}\ .
\end{align}</span>
More text here."""
        )



if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    unittest.main()
