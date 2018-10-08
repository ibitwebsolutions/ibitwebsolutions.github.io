'use strict';
 
var gulp        = require('gulp');
var concat        = require('gulp-concat');
var merge        = require('merge-stream');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');



// Static Server + watching scss/html files
gulp.task('serve', ['sass','js'], function() {

	browserSync.init({
		server: "."
	});

	gulp.watch([
			   "assets/scss/utils/*.scss",
			   "assets/scss/components/*.scss",
			   "assets/scss/base/*.scss",
			   "assets/scss/layouts/*.scss",
			   'assets/gulp-js/*.js'
			   ], ['sass','js']);
	gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src([
			   		"assets/scss/utils/*.scss",
					"assets/scss/components/*.scss",
					"assets/scss/base/*.scss",
					"assets/scss/layouts/*.scss"
				   ])
		.pipe(concat('assets/css/style.css'))
		.pipe(plumber({
			handleError: function(err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(sass({outputStyle : 'compressed'}))
		.pipe(gulp.dest("./"))
		.pipe(browserSync.stream());
});

gulp.task('js', function() {
	return gulp.src('assets/gulp-js/*.js')
	.pipe(concat("index.js"))
	.pipe(uglify())
	.pipe(gulp.dest('assets/js/'))
	.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);