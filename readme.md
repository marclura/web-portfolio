# Web portfolio

## Installation

Install Node.js https://nodejs.org/en/

Install those node modules:

```
npm install gulp
npm install gulp-sass
```

## Kirby plugins

- Add the "gallery" plugin to generate galleries

```
https://github.com/TimOetting/kirby-gallery
```

Copy it in site > fileds

Now inside the blueprint you can add a gallery by adding this field:

```
mygallery:
    label: My Gallery
    type: gallery
```

