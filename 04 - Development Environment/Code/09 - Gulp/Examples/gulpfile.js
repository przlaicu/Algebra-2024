const gulp = require('gulp'); // gulp
const uglify = require('gulp-uglify'); // gulp uglify
const cleanCSS = require('gulp-clean-css'); // gulp clean css

gulp.task('uglify', () => {
    return gulp.src('js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});
