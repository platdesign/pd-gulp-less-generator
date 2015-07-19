#pd-gulp-less

[pd-gulp](https://github.com/platdesign/pd-gulp) task generator for less tasks.


##Install

	npm install --save pd-gulp-less
	
##Example

```javascript
var gulp = require('gulp');
var sass = require('pd-gulp-less')(gulp);

// Register default tasks (default, watch, build, etc.)
sass.register({
	myLib:{
		src: './src/less/*.{less}',
		dest: './dist/css'
	}
});

// Create custom gulp-task
gulp.task('customLess', less({
	custom: {
		src: './src/less/*.{less}',
		dest: './dist/css'
	}
}));
```

##Options

- `autoprefixer` Configuration object for [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)
- `livereload` Configuration object for [gulp-livereload](https://github.com/vohof/gulp-livereload)
- `minify` Configuration object for [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)
- `watch` True or path which will be observed.

