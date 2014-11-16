var gulp = require('gulp');
var karma = require('karma').server;
var path = require('path');

module.exports = function (config) {
  gulp.task('test', function (done) {
    karma.start({
      configFile: path.join(config.root, 'karma.conf.js'),
      singleRun: true
    }, done);
  });
};

