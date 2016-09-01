var gulp = require('gulp');
gulp.task('lib:move', lib_move());


var libList=[
'node_modules/core-js/client/shim.min.js',
'node_modules/zone.js/dist/zone.js',
"node_modules/reflect-metadata/Reflect.js",
"node_modules/systemjs/dist/system.src.js"
];

gulp.task('lib:move', lib_move());
function lib_move (){
	return function(){
		return gulp.src(libList)
			.pipe(gulp.dest('./dev/libs'));
		}
}
