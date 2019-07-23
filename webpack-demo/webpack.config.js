const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
//    filename: 'bundle2.js',
//    filename: 'bundles/bundle4.js',
//    filename: 'bundles/bundle_font.js',
    filename: 'bundles/bundle_xml.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
       },
       {
         test: /\.(csv|tsv)$/,
         use: [
           'csv-loader'
         ]
       },
       {
         test: /\.xml$/,
         use: [
           'xml-loader'
         ]
       }
     ]
   }
};
