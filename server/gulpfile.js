gulp.task('watch:js', ['js'], function () {
    gulp.watch('ng/**/*.js', ['js'])
})

var fs = require('fs')
fs.readdirSync(__dirname + '/gulp').forEach(function(task) {
    require('./gulp/' + task)
});

