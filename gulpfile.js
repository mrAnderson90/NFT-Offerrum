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

const watchers = () => {
	watch('app/scss/**/*.scss', buildSass);
	watch('app/pages/**/*.pug', buildPug);
}

exports.build = parallel(buildSass, buildPug);
exports.watchers = watchers;