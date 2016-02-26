var gulp = require('gulp');
var stylus = require('gulp-stylus');

module.exports = function () {
  return gulp.src('./src/styl/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./build/css/'));
}
