'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src('./source/style/app.scss')
      .pipe($.gp.if($.isDevelopment, $.gp.sourcemaps.init()))
      .pipe($.gp.sassGlob())
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
	  .pipe($.gp.cssUnit({type: 'px-to-rem', rootSize: 16}))
	  .pipe($.mmq())
      .pipe($.gp.csso())
      .pipe($.gp.if($.isDevelopment, $.gp.sourcemaps.write()))
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  })
};
