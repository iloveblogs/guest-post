var gulp = require('gulp');

module.exports = function() {
	gulp.watch(['src/js/**/*.js', 'src/js/**/*.html'], ['copy', 'inject']);
};