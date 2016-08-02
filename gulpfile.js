var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var wiredep = require('gulp-wiredep');
var webpack = require('webpack-stream');
var eslint = require('gulp-eslint');
var scsslint = require('gulp-scss-lint');

gulp.task('es-lint', function() {
    return gulp.src('src/app/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('scss-lint', function() {
  return gulp.src('src/sass/**/*.scss')
        .pipe(scsslint())
        .pipe(scsslint.failReporter());
});

gulp.task('transpile', ['es-lint'], function() {
  return gulp.src('src/app/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/app/'));
});

gulp.task('scss', ['scss-lint'], () => {
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('wiredep', () => {
    return gulp.src('./src/templates/**/*.html')
    .pipe(wiredep({
        ignorePath: '../../dist/'
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('watch', ['transpile', 'wiredep', 'scss'], () => {
    gulp.watch('src/app/**/*.js', ['transpile']);
    gulp.watch('src/templates/**/*.html', ['wiredep']);
    gulp.watch('src/sass/**/*.scss', ['scss']);
});