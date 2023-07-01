const gulp =require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify=require('gulp-uglify');
const imagemin= require('gulp-imagemin');

function compilaSass(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle:'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./builds/styles'));
}

function comprimeJs(){
    return gulp.src('./source/scripts/*.js')
    //aplicando nos arquivos de busca
    .pipe(uglify())
    .pipe(gulp.dest('./builds/scripts/'));
}

function comprimeImg(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())//plugin que comprime
    //destino da img
    .pipe(gulp.dest('./builds/images'));
}

exports.comprimir=comprimeJs;
exports.nomeSass=compilaSass;
exports.images=comprimeImg;
exports.watch1= function(){
    //outras pastas ./source/images/*,./source/scripts/*
    gulp.watch('./source/styles/*.scss',{ignoreInitial: false}, gulp.series(compilaSass,comprimeJs,comprimeImg));
}
