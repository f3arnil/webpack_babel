'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    entry: './home',
    output: {
        filename: 'build.js',
        library: "home"
    },
    watch: NODE_ENV === 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    //    devtool: 'source-map'
    devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : null,

    plugins: [
//        new webpack.EnvironmentPlugin('NODE_ENV')
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify('ru')
        })
    ],
    
    module: {
        loaders:[{
            test: /\.js$/,
            loader: 'babel?presets[]=es2015'
        }]
    }
}
