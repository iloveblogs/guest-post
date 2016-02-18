var gulp = require('gulp');
var gulpCopy = require('gulp-copy');

module.exports = function() {

	var jsFilesToCopyFromNodeModulesFolder = [
		'./node_modules/angular/angular.min.js',
	];

	var jsOutputFolder = './js/lib';

	var copyOptions = {prefix: 2};

	return gulp.src(jsFilesToCopyFromNodeModulesFolder)
  			.pipe(gulpCopy(jsOutputFolder, copyOptions));
};