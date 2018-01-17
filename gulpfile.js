var gulp = require('gulp');
var concat = require('gulp-concat')


gulp.task('default', ['concat'], function () {
  gulp.watch('src/*.js', ['concat']);
});

gulp.task("concat", function(){
  return gulp.src('src/*.js')
    .pipe(concat('final.js'))
    .pipe(gulp.dest('dist'));
})



