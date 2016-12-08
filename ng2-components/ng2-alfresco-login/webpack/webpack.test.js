'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    module: {
        preLoaders: [
            {exclude: /node_modules/, loader: 'tslint', test: /\.ts$/}
        ],
        loaders: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {loader: 'raw', test: /\.(css|html)$/},
            {exclude: /node_modules/, loader: 'ts', test: /\.ts$/}
        ]
    },
    "output": {"publicPath": "/"},
    resolve: {
        extensions: ['', '.js', '.ts'],
        modulesDirectories: ['node_modules'],
        root: path.resolve('.', 'src')
    },
    tslint: {
        emitErrors: true
    },
    node: {
        fs: "empty"
    }
};
