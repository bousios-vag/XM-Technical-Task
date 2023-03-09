const gulp = require('gulp');
const { src, series, parallel, dest, watch} = require('gulp');

const cssPath = 'assets/css/**/*.css';


const jsPath = 'assets/js/**/*.js';


function copyHtml() {
  return src('src/*.html').pipe(gulp.dest('dist'));
}

function imgTask() {
  return src('assets/images/*').pipe(gulp.dest('dist/xmtechnicaltask-assets/images'));
}

function cssTask() {
  return src(cssPath)
    .pipe(dest('dist/xmtechnicaltask-assets/css'));
}

function jsTask() {
  return src(jsPath)
    .pipe(dest('dist/xmtechnicaltask-assets/js'));
}



exports.cssTask = cssTask;
exports.imgTask = imgTask;
exports.jsTask = jsTask;
exports.copyHtml = copyHtml;
exports.vangelas = series(
  parallel(copyHtml, imgTask, cssTask,jsTask)
);
