var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested');

gulp.task('default', function () {
    console.log('default gulp task.');
});
gulp.task('html', function () {
    console.log('html gulp task.');
});
gulp.task('styles', function () {
    console.log('css gulp task.');
});
gulp.task('watch', function () {

    watch('./app/index.html', function () {
        gulp.start('html');

    });

    watch('./app/assets/styles/**/*.css', function () {
        return gulp.src('./app/assets/styles/style.css')
          .pipe(postcss([cssvars, nested, autoprefixer]))
          .pipe(gulp.dest('./app/temp/styles'));
    });
});