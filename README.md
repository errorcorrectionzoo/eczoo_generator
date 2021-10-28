# Generate the Error Correction Zoo

This repository holds the code required to generate the error correction zoo
website, based off of a repository of code data provided as YaML files.


## Set up the environment

To generate the site, you need to set up your environment first.

1. Make sure you have Python ≥ 3.8 installed.

2. [Install `poetry`, a powerful environment manager for
   Python](https://python-poetry.org/docs/#installation)

3. Install the python virtual environment and package dependencies.  All of that
   is done automatically by running `poetry install` inside the directory of your
   local clone of this repo:
   
       > poetry install
       
You're all set!


## Generate the error correction zoo website

Run the `generate_ecc_zoo.py` script in the `poetry` environment:

    > poetry run python generate_ecc_zoo.py
    
Et voilà! You'll find your website in the `out/` directory. (That's what I
currently configured it to do.  It will probably change in the future.)

Currently, I've configured the script to use the dummy example codes stored in
an internal folder `scratch-example-codes/`.  I think it would be a better idea
to store the code files in a separate repository for a better
compartmentalization of the different pieces of the site.  (E.g., an erroneous
manipulation in the repo with the code data doesn't affect the zoo generation
code.)


