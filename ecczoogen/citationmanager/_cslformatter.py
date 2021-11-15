import re

_escape_chars = {
    '\\': r'\textbackslash',
    '%': r'\%',
    '#': r'\#',
    '&': r'\&',
    '$': r'\$',
    '{': r'\{',
    '}': r'\}',
}

def _multiple_replace(s, rep_dict):
    # https://stackoverflow.com/a/15448887/1694896
    pattern = re.compile("|".join([
        re.escape(k)
        for k in sorted(rep_dict,key=len,reverse=True)
    ]), flags=re.DOTALL)
    return pattern.sub(lambda x: rep_dict[x.group(0)], s)

def preformat(text):
    return _multiple_replace(text, _escape_chars)


class MinilatexCommandWrapper(str):
    cmd = None

    @classmethod
    def _wrap(cls, text):
        return f'\\{cls.cmd}{{{text}}}'

    def __new__(cls, text):
        return super(MinilatexCommandWrapper, cls).__new__(cls, cls._wrap(text))


class Italic(MinilatexCommandWrapper):
    cmd = 'textit'


class Oblique(Italic):
    pass


class Bold(MinilatexCommandWrapper):
    cmd = 'textbf'


class Light(MinilatexCommandWrapper):
    cmd = 'textit' # italic instead


class Underline(MinilatexCommandWrapper):
    cmd = 'textit' # italic instead


class Superscript(MinilatexCommandWrapper):
    cmd = 'textit' # italic instead


class Subscript(MinilatexCommandWrapper):
    cmd = 'textit' # italic instead


class SmallCaps(MinilatexCommandWrapper):
    cmd = 'textit' # italic instead
