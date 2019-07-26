const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.HashedModuleIdsPlugin(),
//webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
//    new webpack.optimize.CommonsChunkPlugin({
//      name: 'manifest'
//    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
             presets: ['es2015']
          }
        }]
      }
    ]
  }
});
