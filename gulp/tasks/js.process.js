'use strict';

module.exports = function() {
  $.gulp.task('js:process', function() {
	return $.gulp.src('source/js/*.js')
	  .pipe($.gp.plumber({
		  errorHandler: $.gp.notify.onError(function (error) {
			return {
			  title: 'JavaScript',
			  message:  error.message
			}
		  })
	  }))
	  .pipe($.named())
	  .pipe($.webpack($.webpackConfig))
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
