'use strict';

module.exports = function() {
  $.gulp.task('js:process', function() {
    return $.gulp.src('source/js/app.js')
      .pipe($.webpack($.webpackConfig)).on('error', $.gp.notify.onError({ title: 'JavaScript' }))
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
