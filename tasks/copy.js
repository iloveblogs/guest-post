var gulp = require('gulp');
var gulpCopy = require('gulp-copy');
var merge = require('merge-stream');


module.exports = function() {

	var angularSourceFolder = ['./node_modules/angular/angular.min.js'];
	var uiRouterSourceFolder = ['./node_modules/angular-ui-router/release/angular-ui-router.min.js'];

	var javascriptDestFolder = './js/lib';

	var angularCopyOptions = {prefix: 2};
	var uiRouterCopyOptions = {prefix: 3};

	var angularCopy = gulp.src(angularSourceFolder)			
			  		.pipe(gulpCopy(javascriptDestFolder, uiRouterCopyOptions));

	var uiRouterCopy = gulp.src(uiRouterSourceFolder)
					.pipe(gulpCopy(javascriptDestFolder, uiRouterCopyOptions));

	return merge(angularCopy, uiRouterCopy);
};