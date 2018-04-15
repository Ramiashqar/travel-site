var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('default', function () {
    console.log('Hooray, its as default gulp');
});

gulp.task('html', function () {
    browserSync.reload();
});



gulp.task('watch', function () {
    browserSync.init({
        notify: false,
        server: {
          baseDir: "app"
        }
      });
    
      watch('./app/index.html', function() {
        browserSync.reload();
      });
    
      watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
      });
});

gulp.task('cssInject', function () {
    return gulp.src('./app/assets/styles/style.css')
        .pipe(browserSync.stream());
});