var gulp = require('gulp');

module.exports = function() {
    var files = [
        'src/js/**/*.js',
        'src/js/**/*.html',
        'src/styl/**/*.styl'
    ];

    gulp.watch(files, ['copy', 'inject', 'styl']);
};
