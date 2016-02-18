var gulp = require('gulp');
var inject = require('gulp-inject');

module.exports = function() {

	var staticFilesList = [
		'./css/**/*.css',
		'./js/lib/**/*.js',
		'./js/base.js',
		'./js/**/*.module.js',
		'./js/**/*.factory.js',
		'./js/**/*.directive.js',
		'./js/**/*.js',
		'!Gulpfile.js',
		'!./tasks/*.js',
	];

	var injectOptions = {
		addRootSlash: false,
	};

	return gulp.src('src/index.html')
		.pipe(inject(gulp.src(staticFilesList, {read: false}), injectOptions))
		.pipe(gulp.dest('./'));
};


