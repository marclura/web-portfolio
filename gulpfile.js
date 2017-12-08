// Packages
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    less = require('gulp-less'),
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
    sassMainSource,   // the main.scss that @include all the other sass files
    sassWatchSources,   // paths to the scss files
    lessWatchSources,   // paths for the less files
    stylusWatchSources,   // paths for the stylus files
    outputDir,
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
  'src/assets/js/**/*.js'
];

sassMainSource = [ 'src/assets/sass/main.scss'];

sassWatchSources = [
  'src/assets/sass/*.scss',
  'src/assets/sass/**/*.scss'
];

lessWatchSources = [
  'src/assets/less/*.less',
  'src/assets(less/**/*.less'
];

stylusWatchSources = [
  'src/assets/stylus/*.styl',
  'src/assets/stylus/**/*.styl'
];


// Tasks
gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest(outputDir + 'assets/builds'))
})


gulp.task('sass', function() {
  return gulp.src(sassMainSource)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(postcss([
        lost(),
        cssnano()
      ]))
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cssOutputDir))
})

gulp.task('less', function() {
  gulp.src(lessWatchSources)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cssOutputDir))
})

gulp.task('stylus', function() {
  return gulp.src(stylusWatchSources)
    .pipe(sourcemaps.init())
    .pipe(stylus({

    }))
    .pipe(postcss([
        lost(),
        autoprefixer(),
        cssnano()
      ]))
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(cssOutputDir))
})

gulp.task('connect', function() {
  connect.server({ base: outputDir, port: 3000, keepalive: true });
})


gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  //gulp.watch(sassWatchSources, ['sass']);
  //gulp.watch(lessWatchSources, ['less']);
  gulp.watch(stylusWatchSources, ['stylus']);
})


// This default task will be executed by just writing $ gulp in the CLI
gulp.task('default', ['connect', 'stylus', 'watch']);