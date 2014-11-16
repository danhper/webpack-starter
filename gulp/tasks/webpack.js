var path = require('path');
var gulp = require('gulp');
var webpack = require('webpack');
var gWebpack = require('gulp-webpack');


module.exports = function (config) {
  var webpackConfig = require(path.join(config.config, 'webpack.config.js'));
  gulp.task('webpack', function() {
    var customConfig = Object.create(webpackConfig);
    customConfig.plugins = customConfig.plugins.concat(
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    );

    return gulp.src(path.join(config.root, 'src', 'entry.js'))
      .pipe(gWebpack(customConfig))
      .pipe(gulp.dest(path.join(config.root, 'dist/')));
  });
};
