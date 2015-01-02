var gulp = require('gulp')
var stylus = require('gulp-stylus')

gulp.task('css', function () {
    gulp.scr('css/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('assets'))
})