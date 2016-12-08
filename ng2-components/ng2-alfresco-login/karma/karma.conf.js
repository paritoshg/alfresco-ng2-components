'use strict';

module.exports = config => {
    config.set({
        autoWatch: true,
        colors: true,
        browsers: ['Chrome', 'PhantomJS'],
        files: [
            '../node_modules/alfresco-js-api/dist/alfresco-js-api.js',
            '../node_modules/es6-shim/es6-shim.min.js',
            'karma.entry.js',
            //Assets
            {pattern: '../src/assets/images/background.svg', included: false, watched: false},
            {pattern: '../src/assets/images/alfresco-logo.svg', included: false, watched: false}
        ],
        exclude: [
            '../node_modules/**/*spec.js'
        ],
        frameworks: ['jasmine'],
        logLevel: config.LOG_INFO,
        phantomJsLauncher: {
            exitOnResourceError: true
        },
        port: 9876,
        preprocessors: {
            'karma.entry.js': ['webpack', 'sourcemap'],
            'dist/**/!(*spec|index|*mock|*model).js': 'coverage'
        },
        reporters: ['mocha', 'coverage', 'kjhtml'],
        singleRun: true,
        webpack: require('../webpack/webpack.test.js'),
        webpackServer: {
            noInfo: true
        },
        coverageReporter: {
            includeAllSources: true,
            dir: '../coverage/',
            subdir: 'report',
            reporters: [
                {type: 'text'},
                {type: 'json', file: 'coverage-final.json'},
                {type: 'html'},
                {type: 'lcov'}
            ]
        }
    });
};
