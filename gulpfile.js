var gulp = require('gulp');
var babel = require('gulp-babel');
var browserSync  = require('browser-sync');
var sass = require('gulp-sass');
var del = require('del');


// Clean up first!
gulp.task('clean', function () {
  // this uses a Node module directly within gulp (no need for gulp plugin)
  // but still need to import (as node module)
  return del(['dist']);
});


gulp.task('babel', function() {
  return gulp.src("src/jsx/**/*")
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(gulp.dest("src/js/"));
});

gulp.task('images', function () {
  return gulp.src('src/img/**/*.*')
    .pipe(gulp.dest('dist/img'));
});


gulp.task('watch', ['babel'], function () {
    gulp.watch('src/jsx/**/*.jsx', ['babel', browserSync.reload, 'scripts'] );
    gulp.watch('src/sass/**/*.scss', ['sass', browserSync.reload]);
    gulp.watch('src/**/*.html', [browserSync.reload], 'html');
    gulp.watch('src/img/**/*', 'images');

});

gulp.task('html', function() {
  return gulp.src('src/**/*.html')
  .pipe(gulp.dest('dist/'));
})

gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
  .pipe(gulp.dest('dist/js'));
})

// SASS
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
    .pipe(gulp.dest('dist/css'));
});

// BROWSER SYNC
gulp.task('browsersync', function() {
  browserSync({
    server: {
      baseDir: './dist/'
    },
    open: false
    // online: false,
    // notify: false,
  });
});

gulp.task("default", ['clean', 'sass', 'html', 'images', 'scripts', "browsersync", "watch"]);
