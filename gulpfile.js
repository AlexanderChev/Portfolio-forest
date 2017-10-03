'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
  mmq: require('gulp-merge-media-queries'),
  fs: require('fs'),
  webpack: require('webpack-stream'),
  webpackConfig: require('./webpack.config'),
  isDevelopment: !process.env.NODE_ENV || process.env.NODE_ENV == 'development'

};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'js:process',
    'copy:image',
    'copy:font',
    'copy:manifest',
    'css:foundation',
    'sprite:svg'
  ),

  $.gulp.parallel(
    'watch',
    'serve'
  )
));

$.gulp.task('build', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'copy:pug',
    'js:foundation',
    'js:process',
    'imagemin',
    'copy:font',
    'copy:manifest',
    'css:foundation',
    'sprite:svg'
  )
));
