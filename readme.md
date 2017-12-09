# Web portfolio

The website is build with [Kirby CMS](https://getkirby.com/), it uses [Lost grid](http://lostgrid.org/) as grid system and [stylus](http://stylus-lang.com/) as CSS language.

## Installation

Install [Node.js](https://nodejs.org/en/).

Install the required node modules using the package.json file:

```
$ npm install
```

## Kirby plugins


### Gallery

- Add the ["gallery" plugin](https://github.com/TimOetting/kirby-gallery) to generate galleries

Copy it in site > fileds

Now inside the blueprint you can add a gallery by adding this field:

```
mygallery:
    label: My Gallery
    type: gallery
```

### Modules

- Add the ["modules" plugin](https://github.com/getkirby-plugins/modules-plugin) to reuse contents part in the panel to simplify the content management.

Copy it in the site/plugins/ directory.

The modules created has by default be saved here site/modules/


## Run it locally

```
$ gulp
```

A new folder is created with the name of 'dist', and it's already accessible at [http://localhost:3000](http://localhost:3000)

## Mobile firt approach

The website has been developed following the mobile first approach, consisting in building the mobile version first and scale it up for the desktop version when necessary.

This pratically consists in defining the css rules for the mobile version as default and then by definig the breakpoints rules afterwords from the smaller to the bigger breakpoint by using the "min-width" media query.

```
.class {
	width: 100%;

	@media (min-width: 600px) {
		width: 66%;
	}

	@media (min-width: 900px) {
		width: 50%;
	}
}
```

The media query will rewrite the css rule only if the condition is true, so in the example above the width is 100% between 0 and 599px, 66% from 600px to 899px and 50% form 900px.