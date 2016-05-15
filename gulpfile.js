var gulp = require('gulp');
var babel = require('gulp-babel');
var browserSync  = require('browser-sync');


gulp.task('babel', function() {
  return gulp.src("src/jsx/**/*")
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest("src/js/"));
});

gulp.task('watch', ['babel'], function () {
    gulp.watch('src/jsx/**/*.jsx', ['babel', browserSync.reload] );
});

gulp.task('browsersync', function() {
  browserSync({
    server: {
      baseDir: './src/'
    },
    open: false
    // online: false,
    // notify: false,
  });
});

gulp.task("default", ["browsersync", "watch"]);
