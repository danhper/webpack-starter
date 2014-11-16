var path = require('path');
var gulp = require('gulp');
var webpack = require('webpack');
var gWebpack = require('gulp-webpack');


module.exports = function (config) {
  var webpackConfig = require(path.join(config.config, 'webpack.config.js'));

  gulp.task('build', ['webpack:build']);

  gulp.task('build-dev', ["webpack:build-dev"], function() {
    gulp.watch([path.join(config.root, 'src/**/*')], ["webpack:build-dev"]);
  });

  var webpackTask = function (wConfig) {
    return gulp.src(path.join(config.root, 'src', 'entry.js'))
      .pipe(gWebpack(wConfig))
      .pipe(gulp.dest(path.join(config.root, 'dist/')));
  };

  gulp.task('webpack:build', function () {
    var prodConfig = Object.create(webpackConfig);
    prodConfig.plugins = prodConfig.plugins.concat(
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    );
    return webpackTask(prodConfig);
  });

  gulp.task('webpack:build-dev', function () {
    var devConfig = Object.create(webpackConfig);
    devConfig.devtool = "sourcemap";
    devConfig.debug = true;
    return webpackTask(devConfig);
  });
};
