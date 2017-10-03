'use strict';

const webpack = require('webpack');
const isDevelopment = process.env.NODE_ENV || 'development';

module.exports = {
  babelrc: true,
  output: {
    filename: 'app.js'
  },
  devtool: isDevelopment == 'development' ? 'eval': null,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
		warnings: false
	  },
      output: {
        comments: false
      }
    })
  ]
};
