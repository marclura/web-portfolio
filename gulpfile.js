// Packages
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect-php');

// Variables declaration
var env,
    jsSources,    // path to the js files
    sassMainSource,   // the main.scss that @include all the other sass files
    sassWatchSources,   // paths to the scss files
    outputDir;    // define if it's the dev output or the distribution

// Creting the environment
env = process.env.NODE_ENV || 'dev';


if (env==='dev') {
  outputDir = 'dev/';
} else {
  outputDir = 'dist/';
}

// Sources
jsSources = [
  'dev/assets/js/*.js',
  'dev/assets/js/**/*.js'
];

sassMainSource = [ 'dev/assets/sass/main.scss'];

sassWatchSources = [
  'dev/assets/sass/*.scss',
  'dev/assets/sass/**/*.scss'
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
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(outputDir + 'assets/builds/'))
})


gulp.task('connect', function() {
  connect.server({ base: outputDir, port: 3000, keepalive: true });
})


gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassWatchSources, ['sass']);
})


// This default task will be executed by just writing $ gulp in the CLI
gulp.task('default', ['connect', 'watch']);