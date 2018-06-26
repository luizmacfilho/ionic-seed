var webpackConfig = require('./webpack.test.js');

module.exports = function(config) {
  var _config = {
    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      {
        pattern: './test-config/karma-test-shim.js',
        watched: true
      },
      {
        pattern: './src/assets/**/*',
        watched: false,
        included: false,
        served: true,
        nocache: false
      }
    ],
    proxies: {
      '/assets/': '/base/src/assets/'
    },
    preprocessors: {
      './test-config/karma-test-shim.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true
    },
    browserConsoleLogOptions: {
      level: 'log',
      format: '%b %T: %m',
      terminal: true
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    specReporter: {
      maxLogLines: 1,             // limit number of lines logged per test
      suppressErrorSummary: true, // do not print error summary
      suppressFailed: false,      // do not print information about failed tests
      suppressPassed: false,      // do not print information about passed tests
      suppressSkipped: true,      // do not print information about skipped tests
      showSpecTiming: true,       // print the time elapsed for each spec
      failFast: true              // test would finish with error when a first fail occurs.
    },
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222',
        ],
      }
    },
    reporters: config.coverage ? ['spec', 'kjhtml', 'coverage-istanbul'] : ['spec', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false
  };

  config.set(_config);
};
