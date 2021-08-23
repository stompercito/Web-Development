//1// Node Package manager
    /*
    De sus siglas NPM (Node Package Manager) es un gestor de paquetes desarrollado en su totalidad bajo el lenguaje JavaScript por Isaac Schlueter, 
    a través del cual podemos obtener cualquier librería con tan solo una sencilla línea de código, lo cual nos permitirá agregar dependencias de forma simple, 
    distribuir paquetes y administrar eficazmente tanto los módulos como el proyecto a desarrollar en general.
    */

//2// package.json
    /*
    Your project's package.json is the central place to configure and describe how to interact with and run your application. It is used by the npm CLI (and yarn) 
    to identify your project and understand how to handle the project's dependencies. It's the package.json file that enables npm to start your project, run scripts, 
    install dependencies, publish to the NPM registry, and many other useful tasks.
    */

//4// Dependencies: dev, shared*, side effects*, versions, tree, package-lock.json
    /*
    - devDependencies should contain packages which are used during development or which are used to build your bundle, for example, mocha, jscs, grunt-contrib-watch, 
      gulp-jade and etc. These packages are neseccery only while you are developing your project, also ESlint is used to check everything during building your bundle.
    
    - package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact 
      tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
        
        This file is intended to be committed into source repositories, and serves various purposes:
            Describe a single representation of a dependency tree such that teammates, deployments, and continuous integration are guaranteed to install exactly the same dependencies.
            Provide a facility for users to "time-travel" to previous states of node_modules without having to commit the directory itself.
            Facilitate greater visibility of tree changes through readable source control diffs.
            Optimize the installation process by allowing npm to skip repeated metadata resolutions for previously-installed packages.
    */

//3// Scripts
    /*
    The "scripts" property of your package.json file supports a number of built-in scripts and their preset life cycle events as well as arbitrary scripts. 
    These all can be executed by running npm run-script <stage> or npm run <stage> for short.
    */

//5// Common commands: install, remove, run, ci, tree
    /*
    Install package.json dependencies
        npm install

    Shorthand
        # install
        npm i <package>

        # uninstall
        npm un <package>

        # update
        npm up <package>

    Flags
        -S is the same as --save, and -D is the same as --save-dev.
        
        List globally installed packages
            npm list -g --depth=0

        ninstall global package
            npm -g uninstall <name> 

        Upgrade npm on Windows
            npm-windows-upgrade

    Update global packages
        To see which packages need updating, use:
            npm outdated -g --depth=0

        To update global packages individually you can use:
            npm update -g <package> <package> <package>

        list available scripts to run
            npm run

        Update npm
            npm install -g npm@latest

        # using windows? Then use
            npm-windows-upgrade

    Installed version
        npm list # for local packages
    */

//6// Cache
    /*
    npm stores cache data in an opaque directory within the configured cache, named _cacache. This directory is a cacache-based content-addressable cache 
    that stores all http request data as well as other package-related data. This directory is primarily accessed through pacote, the library responsible 
    for all package fetching as of npm@5.
    */

//7// Audit
    /*
    The audit command submits a description of the dependencies configured in your project to your default registry and asks for a report of known vulnerabilities. 
    If any vulnerabilities are found, then the impact and appropriate remediation will be calculated. If the fix argument is provided, then remediations will be 
    applied to the package tree.
    */

//8// npx
    /*
    Npx es una herramienta de cli que nos permite ejecutar paquetes de npm de forma mucho más sencilla.
    */

//9//Publishing packages
    /*
    Creating a scoped public package

    1 - If you are using npmrc to manage accounts on multiple registries, on the command line, switch to the appropriate profile:

        npmrc <profile-name>

    2 - On the command line, create a directory for your package:

        mkdir my-test-package

    3 - Navigate to the root directory of your package:

        cd my-test-package

    4 - If you are using git to manage your package code, in the package root directory, run the following commands, replacing git-remote-url with the git remote URL for your package:

        git init
        git remote add origin git://git-remote-url

    5 - In the package root directory, run the npm init command and pass the scope to the scope flag:

        For an organization-scoped package, replace my-org with the name of your organization:

            npm init --scope=@my-org

        For a user-scoped package, replace my-username with your username:

            npm init --scope=@my-username

    6 - Respond to the prompts to generate a package.json file. For help naming your package, see "Package name guidelines".

    7 - Create a README file that explains what your package code is and how to use it.

    8 - In your preferred text editor, write the code for your package.
    */
    