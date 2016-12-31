var gulp = require('gulp');
var browserify = require('gulp-browserify');
var watch = require('gulp-watch');
 
// Basic usage 
gulp.task('browserify', function() {
    // Single entry point to browserify 
    gulp.src('js/src/Jaffa.ElementFactory.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('build/js'))
});

gulp.task('browserify-tests', function() {
    // Single entry point to browserify 
    gulp.src('js/tests/element-test.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('build/tests'))
});

gulp.task('watch', function() {
  gulp.watch('js/src/*.js', ['browserify']);
  gulp.watch('js/tests/*.js', ['browserify-tests']);
  
});

gulp.task('default', ['watch']);