var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost');

 
gulp.task('sass', function () {
  return gulp.src('./assets/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(postcss([
      lost(),
      autoprefixer()
    ]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);


gulp.task('scripts', function () {
    return gulp.src('assets/js/*.js')
        .pipe($.jshint('.jshintrc'))
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.size());
});