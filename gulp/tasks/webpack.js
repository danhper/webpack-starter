var path = require('path');
var gulp = require('gulp');
var webpack = require('gulp-webpack');


module.exports = function (config) {
  var webpackConfig = require(path.join(config.root, 'webpack.config.js'));
  gulp.task('webpack', function() {
      return gulp.src(path.join(config.root, 'src', 'entry.js'))
          .pipe(webpack(webpackConfig))
          .pipe(gulp.dest(path.join(config.root, 'dist/')));
  });
};
