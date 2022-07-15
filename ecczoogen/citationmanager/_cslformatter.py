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
        for k in sorted(rep_dict.keys(),key=len,reverse=True)
    ]), flags=re.DOTALL)
    return pattern.sub(lambda x: rep_dict[x.group(0)], s)

def preformat(text):
    # if isinstance(text, list): # ???
    #     return [preformat(z) for z in text]
    text = str(text)

    s = _multiple_replace(text, _escape_chars)

    return s


class LLMCommandWrapper(str):
    cmd = None

    @classmethod
    def _wrap(cls, text):
        text = preformat(text)
        return f'\\{cls.cmd}{{{text}}}'

    def __new__(cls, text):
        return super(LLMCommandWrapper, cls).__new__(cls, cls._wrap(text))


class Italic(LLMCommandWrapper):
    cmd = 'textit'


class Oblique(Italic):
    pass


class Bold(LLMCommandWrapper):
    cmd = 'textbf'


class Light(LLMCommandWrapper):
    cmd = 'textit' # italic instead


class Underline(LLMCommandWrapper):
    cmd = 'textit' # italic instead


class Superscript(LLMCommandWrapper):
    cmd = 'textit' # italic instead


class Subscript(LLMCommandWrapper):
    cmd = 'textit' # italic instead


class SmallCaps(LLMCommandWrapper):
    cmd = 'textit' # italic instead
