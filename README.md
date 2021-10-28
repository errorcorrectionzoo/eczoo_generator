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


## Viewing the website

Don't open the outputted HTML file directly in your browser! It won't be able to
find the dependent files.  Instead, run the command:

    > cd out
    > poetry run python -m http.server
    
The command should display something like `Serving HTTP on :: port 8000
(http://[::]:8000/) ...`.  Enter the given address in your browser to view the
generated site (or [try to click this link](http://localhost:8000/) after you've
started the python http server).

(Refer to the [http.server
documentation](https://docs.python.org/3/library/http.server.html#http-server-cli)
if you'd like to run your local server on a different port or on different
network interfaces.)

