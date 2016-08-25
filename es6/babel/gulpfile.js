const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const runSequence = require('gulp-run-sequence');



var buildWeb = "build/";
var flatFileName="all.js";
var devRoot = 'dev/';
var srcDev = devRoot+'src/'
var jsDev = srcDev+"**/*.js";
gulp.task("default", function (cb) {
    runSequence('js.libs', 'js.babel', cb);
});

gulp.task("js.libs", function () {
    return gulp.src([
        'node_modules/babel-polyfill/dist/polyfill.min.js',
        'node_modules/systemjs/dist/system.js'
    ])
        .pipe(gulp.dest(buildWeb+"lib"))
});

gulp.task("js.babel", function (cb) {
   runSequence(['js.babel.src', 'js.babel.module.1'], cb);
});


gulp.task("js.babel.src", function () {
    return gulp.src(jsDev)
	 .pipe(sourcemaps.init())
       .pipe(babel({
            presets: ['es2015']
        }))
		.pipe(concat(flatFileName))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(buildWeb+"js"))
});

gulp.task("js.babel.module.1", function () {
    return gulp.src(devRoot+"modules/module.1.js")
	 .pipe(sourcemaps.init())
       .pipe(babel({
            presets: ['es2015']
        }))
		.pipe(concat('module.1.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(buildWeb+"js/modules/"))
});

gulp.task('watch', watch());
gulp.task('w', watch());

function watch(){
    return function() {
     gulp.watch(jsDev, ['js.babel']);
    }
}