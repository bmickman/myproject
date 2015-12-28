'use strict';
var gulp= require('gulp');
var uglify=require('gulp-uglify');
var sass=require('gulp-sass');

var browserSync=require('browser-sync');
	
gulp.task('minjs',function(){
	gulp.src('assets/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('assets/minjs'));
});

gulp.task('sass',function(){
	gulp.src('assets/sass/*.scss')
	.pipe(sass())

	.pipe(gulp.dest('assets/css'))
	.pipe(browserSync.reload({stream:true}));
});


gulp.task('browser-sync', function() {
    	browserSync.init(null,{
		server:{
			baseDir:'./'
		},
		startPath:"index.html"
	});
});

gulp.task('watch',['browser-sync'],function(){

	gulp.watch('assets/js/*.js',['minjs']);
	gulp.watch('assets/sass/*.scss',['sass']);
});

gulp.task('default',['minjs','sass','watch']);