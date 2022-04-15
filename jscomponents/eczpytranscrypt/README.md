# Generate some JavaScript sources automatically from some python code

Commands to run are:

    export PYLATEXENC_SRC_DIR=~/Research/util/pylatexenc
    rsync -aP $PYLATEXENC_SRC_DIR/tools/js-transcrypt/pylatexenc .  --exclude '__pycache__'
    ln -s $PYLATEXENC_SRC_DIR/tools/js-transcrypt/libpatches .
    poetry run transcrypt import_ecz_py_modules.py --dassert --dext --gen --tconv --sform --kwargs --keycheck --opov --xreex --nomin --build --anno --parent .none -xp 'libpatches' -od eczpytranscrypt
    cp template-package.json eczpytranscrypt/package.json
    

