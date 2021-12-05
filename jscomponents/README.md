# Javascript Components for the error correcting zoo

This folder collects some larger javascript components that are used in the zoo,
such as the search tool.

## Workflow: Yarn / Webpack

We use the yarn package manager (basically, a JavaScript equivalent of poetry).
To install all dependencies, run:

    > yarn install
    

To build the Javascript components, use

    > yarn run webpack-production
    
Use ``webpack-devel`` instead of ``webpack-production`` to create development
versions of the packages, for better in-browser debugging.

The compilied components are committed into GIT version control, so that yarn,
node modules, etc., are not required to build the site.  We might change this
practice at a later date to avoid having compiled components in version control.
