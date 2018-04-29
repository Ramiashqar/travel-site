var gulp= require('gulp'),
modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
    return gulp.src(['./sass/**/*.scss', './app/assets/scripts/**/*.js'])
    .pipe(modernizr({
        "options": [
            "setClasses"
        ]
    }))
    .pipe(gulp.dest('./app/temp/'));
});