var gulp = require('gulp'),
    	uglify = require('gulp-uglify'),
    	rename = require('gulp-rename'),
		minifyCSS = require('gulp-minify-css'),
		minifyHTML = require('gulp-minify-html');
		imagemin = require('gulp-imagemin');

gulp.task('optimize-img', function() {
    return gulp.src('./img/*')
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('./dist/img/'));
});

gulp.task('minify-js', function () {
    	gulp.src('./js/**/*.js')
    	.pipe(uglify())
    	.pipe(gulp.dest('./dist/js/'));
});

gulp.task('minify-css', function () {
    	gulp.src('./css/**/*.css')
    	.pipe(minifyCSS())
    	.pipe(gulp.dest('./dist/css/'));
});

gulp.task('minify-html', function () {
    	gulp.src('./*.html')
    	.pipe(minifyHTML())
    	.pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['minify-js', 'minify-css', 'minify-html', 'optimize-img']);


