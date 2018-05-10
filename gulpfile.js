// Packages
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect-php'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost'),
    cssnano = require('cssnano');

// Variables declaration
var env,
    jsSources,    // path to the js files
    stylusSource,   // file to check to update the css
    outputDir,    // path to output the files
    cssOutputDir;    // define if it's the src output or the distribution

// Creting the environment
env = process.env.NODE_ENV || 'src';

if (env==='src') {
  outputDir = 'src/';
} else {
  outputDir = 'dist/';
}

// css output path
cssOutputDir = outputDir + 'assets/builds/';

// Sources
jsSources = [
  'src/assets/js/*.js',
  'src/assets/js/**/*.js',
  'src/site/modules/**/*.js'
];

stylusMainSource = outputDir + '/assets/stylus/main.styl';

stylusWatchSources = [
  'src/assets/stylus/*.styl',
  'src/assets/stylus/**/*.styl',
  'src/site/modules/**/*.styl'
];


// Tasks
gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest(outputDir + 'assets/builds'))
})


gulp.task('stylus', function() {
  return gulp.src(stylusMainSource)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(postcss([
        lost(),
        autoprefixer()/*,
        cssnano()*/
      ]))
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(cssOutputDir))
})

gulp.task('connect', function() {
  connect.server({ base: outputDir, port: 3000, keepalive: false });
})


gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(stylusWatchSources, ['stylus']);
})


// This default task will be executed by just writing $ gulp in the CLI
gulp.task('default', ['connect', 'stylus', 'js', 'watch']);