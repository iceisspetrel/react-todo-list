var webpack = require('webpack'),
    path    = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry : {
        bundle : path.resolve(__dirname, 'app', 'entry.js'),
        vendor : ['react', 'react-dom', 'underscore', './app/util/util.js']
    },
    output : {
        path : path.resolve(__dirname, 'bundle'),
        filename : 'bundle.js',
        publicPath : './bundle/'
    },
    module : {
        loaders : [
            {
                test : /\.js(x)?/,
                loader : 'babel',
                exclude : /node_modules/,
                query : {
                    presets : ['es2015', 'react']
                }
            },
            {
                test : path.resolve(__dirname, 'app', 'style'),
                loader : 'style!css'
                //loader : ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test : /\.(png|jpg|htm(l)?)$/,
                loader : 'url-loader?limit=1024&name=assets/[hash:16].[name].[ext]'
            }
        ]
    },
    resolve : {
        alias : {
            'react' : path.resolve(__dirname, 'node_modules/react'),
            'react-dom' : path.resolve(__dirname, 'node_modules/react-dom')
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name : 'vendor',
            filename : 'vendor.js'
        }),
        //new ExtractTextPlugin('style.css'),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
       })
    ]
}
