# Building process

Here there will be notes about the building process of this website.

## Setup

Install node locally for the project

```sh
$ npm install
```

Initialise the node package.json by following the instructions on the CLI

```sh
$ npm init
```

Install the node modules

```sh
$ npm install --save-dev package

```

(With the command --save-dev npm will add them to the package.json file automatically)

To remove them

```sh
$ npm uninstall --save-dev package
```

To show the installed packages

```sh
$ npm ls --depth=0	// without dependencies
```

In the gile .gitignore file add the node_module folder, and be sure that Kirby has the right setup for security (accounts for the panel)

```sh
/node_module/*
```

