module.exports = function(config) {
  config.set({

    basePath: '../',

    frameworks: ['mocha', 'chai'],

    files: [
        // all files ending in "_test"
        'test/*_test.js'
        // 'test/**/*_test.js'
        // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
        // add webpack as preprocessor
        'test/foo_test.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map'
    },

    webpackServer: {
        // webpack-dev-server configuration
        // webpack-dev-middleware configuration
        // i. e.
        noInfo: true
    },

    // the port used by the webpack-dev-server
    // defaults to "config.port" + 1
    webpackPort: 8085,

    browsers: ['PhantomJS'],

    plugins: [
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack'),
      require('karma-sourcemap-loader')
    ]
  });
};
