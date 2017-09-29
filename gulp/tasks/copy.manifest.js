'use strict';

module.exports = function() {
    $.gulp.task('copy:manifest', function() {
        return $.gulp.src('./source/manifest/**/*.*', { since: $.gulp.lastRun('copy:manifest') })
            .pipe($.gulp.dest($.config.root + '/'));
    });
};