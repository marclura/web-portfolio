# Web portfolio

The website is build with [Kirby CMS](https://getkirby.com/), it uses [Lost grid](http://lostgrid.org/) as grid system and [stylus](http://stylus-lang.com/) as CSS language.

## Installation

Install [Node.js](https://nodejs.org/en/).

Install the required node modules using the package.json file:

```
$ npm install
```

## Kirby plugins

- Add the ["gallery" plugin](https://github.com/TimOetting/kirby-gallery) to generate galleries

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

A new folder is created with the name of 'dist', and it's already accessible at [http://localhost:3000](http://localhost:3000)