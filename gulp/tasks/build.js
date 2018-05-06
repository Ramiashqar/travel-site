var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    postcss = require('gulp-postcss'),
    prefixer = require('autoprefixer'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();


gulp.task('previewDist', function () {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    });
});


gulp.task('deleteDistFolder', ['icons'], function () {
    return del('./docs');
});

gulp.task('usemin', ['deleteDistFolder', 'scripts'], function () {
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css: [
                function () {
                    return rev();
                },
                function () {
                    return cssnano();
                }
            ],
            js: [
                function () {
                    return rev();
                },
                function () {
                    return uglify();
                }
            ]
        }))
        .pipe(gulp.dest('./docs/'));
});
gulp.task('prefix', ['usemin'], function() {
    return gulp.src('./docs/assets/styles/**/*.css')
        .pipe(postcss([
            prefixer ()
        ]))
      .pipe(gulp.dest('./docs/assets/styles'));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function () {
    var imageSrc = ['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*',
        '!./app/assets/images/iImages', '!./app/assets/images/iImages/**/*'
    ];
    return gulp.src(imageSrc)
        .pipe(imagemin({
            progressive: true,
            intervlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest('./docs/assets/images/'));
});
gulp.task('copyGeneralFiles', ['deleteDistFolder'], function () {
    var generalSrc = [
        './app/assets/**/*', '!./app/assets/images', '!./app/assets/styles', '!./app/assets/scripts',
        '!./app/assets/images/**/*', '!./app/assets/styles/**/*', '!./app/assets/scripts/**/*'
    ];
    return gulp.src(generalSrc)
        .pipe(gulp.dest('./docs/assets/'));
});


gulp.task('build', [ 'deleteDistFolder', 'optimizeImages', 'usemin', 'prefix', 'copyGeneralFiles']);