# Generate the Error Correction Zoo

This repository holds the code required to generate the error correction zoo
website, based off of a repository of code data provided as YaML files.


## Clone the repositories

Make sure that you cloned the three repositories
[`ecczoo_data`](https://github.com/errorcorrectionzoo/eczoo_data),
[`eczoo_generator` (the present
one)](https://github.com/errorcorrectionzoo/eczoo_generator), and
[`eczoo_websitee`](https://github.com/errorcorrectionzoo/eczoo_website), in
folders that reside next to each other:

    |
    |- eczoo_data/
    |  |
    |  \- ...
    |
    |- eczoo_generator/
    |  |
    |  \- ...
    |
    \- eczoo_website/
       |
       \- ...


## Set up the environment

To generate the site, you need to set up your environment first.

1. Make sure you have Python ≥ 3.8 installed.

2. Make sure you have installed `poetry` on your computer.  Poetry is a powerful
   environment manager for Python. [See `poetry` installation instructions
   here](https://python-poetry.org/docs/#installation)

3. Install the python virtual environment and package dependencies.  All of that
   is done automatically by running `poetry install` inside the directory of
   your local clone of this repo.  First make sure you `cd` to the
   `eczoo_generator/` folder:
   
       > cd eczoo_generator/
   
       > poetry install
       
And you're all set!


## Generate the error correction zoo website

All commands are to be run from within the `eczoo_generator/` folder.  Run the
`generate_ecc_zoo.py` script in the `poetry` environment:

    > poetry run python generate_ecc_zoo.py
    
Et voilà! You'll find your website in the sibling `eczoo_website/`
directory.

The script will automatically look for code data files in the `codes/` subfolder
of the sibling `eczoo_data/` folder.


## Viewing the website

Don't open the outputted HTML file directly in your browser! It won't be able to
find the dependent files.  Instead, run the command (still within the
`eczoo_generator/` folder):

    > poetry run python generate_ecc_zoo.py --run-server
    
The command should display something like `Serving HTTP on 0.0.0.0 port 8000
→→→| http://0.0.0.0:8000/ |←←←`.  Enter the given address in your browser to
view the generated site (or [try to click this link](http://localhost:8000/)
after you've started the python http server).

