# Marco Lurati's portfolio

## Installation

- Install Node.js

https://nodejs.org/en/

- Install Gulp

```
npm install --global gulp
```

- Install the following gulp packages

```
npm install --save-dev gulp gulp-postcss gulp-sourcemaps gulp-sass autoprefixer lost
```

- Create a gulpfile.js in the root folder


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

