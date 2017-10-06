'use strict';

module.exports = function() {
  $.gulp.task('pug', function() {
	return $.gulp.src('./source/template/pages/*.pug')
	  .pipe($.gp.plumber({
		  errorHandler: $.gp.notify.onError(function (error) {
			return {
			  title: 'Pug',
			  message:  error.message
		    }
		  })
	  }))
      .pipe($.gp.pug({
        locals: JSON.parse($.fs.readFileSync('./content.json', 'utf8')),

        pretty: '\t'
      }))
      .pipe($.gulp.dest($.config.root));
  });
};
