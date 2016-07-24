var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var wiredep = require('gulp-wiredep');
var typings = require('gulp-typings');

gulp.task('transpile', () => {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist/app'));
});

gulp.task('sass', () => {
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

gulp.task('typings', () => {
    return gulp.src('./typings.json')
        .pipe(typings());
});

gulp.task('watch', () => {
    gulp.watch('src/app/**/*.js', ['transpile']);
    gulp.watch('src/templates/**/*.html', ['wiredep']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('typings.json', ['typings']);
});
