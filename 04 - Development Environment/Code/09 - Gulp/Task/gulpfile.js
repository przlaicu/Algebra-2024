
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cssNano = require('gulp-cssnano');
const sass = require('gulp-sass')(require('sass'));

gulp.task('uglify', () => {
    return gulp.src('scripts/script.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.cssNano ('gulp-cssnano')