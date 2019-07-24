const path = require('path');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: [
      'lodash'
    ]
//    app: './src/index2.js'
  },
  plugins: [
//    new CleanWebpackPlugin(['dist']),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Caching'
    })
  ],
  //4.0配置
  optimization: {
    /*splitChunks: {
        chunks: 'all',//"initial" | "async" | "all"
        cacheGroups: {
            default: false,
            vendors: false,
        },
    },*/
    /*splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendor",
                chunks: "all"
            }
        }
    }*/
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  output: {
//    filename: '[name].bundle.js',
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
};
