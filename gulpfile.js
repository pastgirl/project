// 'use strict';
var gulp = require("gulp");
var htmlmin = require('gulp-htmlmin');
var css = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
//注释

gulp.task('html',["css","javascript"],function(){
	gulp.src("./src/index.html")
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('./dist'));
});

gulp.task('css',function(){
	gulp.src('./src/css/**/*')
		.pipe(css())
		.pipe(concat('all.css'))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('javascript',function(){
	gulp.src(['./src/js/jquery.min.js','./src/js/visih_same.js'])
		.pipe(uglify())
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('inject',['html'],function(){
	gulp.src('./dist/index.html')
		.pipe(inject(gulp.src(['./dist/css/**/*.css','./dist/js/**/*.js']),{relative:true}))
		.pipe(gulp.dest('./dist'));
});

gulp.task("watch",function(){
	gulp.watch("./src/css/**/*",["css"]);
	gulp.watch("./src/js/**/*",["javascript"]);
});

gulp.task("default",["inject","watch"]);