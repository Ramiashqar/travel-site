var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function () {
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('cssInject');
    });

    watch('./sass/**/*.scss', ['sass'], function () {
        gulp.start('sass');
    });

    watch('./app/assets/scripts/**/*.js', function () {
        gulp.start('scriptsRefresh');
    });
});
gulp.task('scriptsRefresh', ['scripts'], function () {
    browserSync.reload();
});
gulp.task('cssInject', function () {
    return gulp.src('./app/assets/styles/style.css')
        .pipe(browserSync.stream());
});
gulp.task('html', function () {
    browserSync.reload();
});