// Packages
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect-php');

// Sources
var jsSources = [
  'assets/js/*.js',
  'assets/js/**/*.js'
];

var saasSource = ['assets/sass/main.scss'];


// Tasks
gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('assets/builds'))
})


gulp.task('sass', function() {
  return gulp.src(saasSource)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/builds/'))
})


gulp.task('connect', function() {
  connect.server({ port: 3000, keepalive: true });
})


gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(['assets/sass/*.scss', 'assets/sass/**/*.scss'], ['sass']);
})


// THis default task will be executed by just writing $ gulp
gulp.task('default', ['connect', 'watch']);