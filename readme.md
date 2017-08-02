# Web portfolio

## Installation

Install Node.js [link: https://nodejs.org/en/ text: node.js]

Install those node modules:

```
$ npm install gulp, gulp-sass, gulp-concat, gulp-sourcemaps, gulp-rename, gulp-connect-php
```

or use the package.json file to install all the modules at once:

```
$ npm install
```

## Kirby plugins

- Add the [link: https://github.com/TimOetting/kirby-gallery text "gallery" plugin] to generate galleries

Copy it in site > fileds

Now inside the blueprint you can add a gallery by adding this field:

```
mygallery:
    label: My Gallery
    type: gallery
```

## Run it locally

```
$ gulp
```