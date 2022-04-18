# Generate some JavaScript sources automatically from some python code

Commands to run are:

    export PYLATEXENC_SRC_DIR=~/Research/util/pylatexenc
    ln -s $PYLATEXENC_SRC_DIR/js-transcrypt/pylatexenc .
    ln -s $PYLATEXENC_SRC_DIR/js-transcrypt/libpatches .
    poetry run transcrypt import_ecz_py_modules.py --dassert --dext --gen --tconv --sform --kwargs --keycheck --opov --xreex --nomin --build --anno --parent .none -u .auto -xp 'libpatches' -od eczpytranscrypt
    cp template-package.json eczpytranscrypt/package.json
    echo -e '\n/** HACK **/ import {custom_apply_patches} from "./customjspatches.js"; custom_apply_patches();' >>eczpytranscrypt/org.transcrypt.__runtime__.js
    

