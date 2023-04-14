const { parallel, src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');

const buildSass = () => {
	console.log('Компиляция Scss');
	return src('app/scss/app.scss')
	.pipe(sass())
	.pipe(dest('src/styles/'));
};

const buildPug = () => {
	console.log('Компиляция Pug');
	return src('app/pages/*.pug')
	.pipe(pug({
		pretty: true
	}))
	.pipe(dest('./'));
};

const buildJS = () => {
	console.log('JS compile');
	return src('app/js/index.js')
	.pipe(dest('src/js/'));
}

const watchers = () => {
	watch('app/scss/**/*.scss', buildSass);
	watch('app/pages/**/*.pug', buildPug);
	watch('app/js/**/*.js', buildJS);
}

exports.build = parallel(buildSass, buildPug, buildJS);
exports.watchers = watchers;