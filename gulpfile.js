var gulp = require('gulp');
var babel = require('gulp-babel');
var browserSync  = require('browser-sync');
var sass = require('gulp-sass');



gulp.task('babel', function() {
  return gulp.src("src/jsx/**/*")
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest("src/js/"));
});

gulp.task('watch', ['babel'], function () {
    gulp.watch('src/jsx/**/*.jsx', ['babel', browserSync.reload] );
    gulp.watch('src/sass/**/*.scss', ['sass', browserSync.reload]);

});

// SASS
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

// BROWSER SYNC
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
