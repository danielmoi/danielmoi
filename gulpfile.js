var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function() {
  return gulp.src("src/jsx/**/*")
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest("src/js/"));
});

gulp.task('watch', ['babel'], function () {
    gulp.watch('src/jsx/**/*.jsx', ['babel'] );
});

gulp.task("default", ["watch"]);
