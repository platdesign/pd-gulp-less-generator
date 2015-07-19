'use strict';

var gulp = require('gulp');



var less = require('../../')(gulp);


// Register default Tasks
less.register({
	options:{
		banner: '/* <%=pkg.name %> HUHU */\n',
	},
	lib: {
		src: './src/*.less',
		dest: './dist'
	}
}, {
	watch: {
		watch: './src/**/*.less'
	}
});


// Create custom task
gulp.task('custom', less({
	testingJade: {
		src: './src/*.less',
		dest: './dist/js/css'
	}
}));


gulp.task('test', ['default', 'build', 'watch', 'custom']);
