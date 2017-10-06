'use strict';

const webpack = require('webpack');
const path = require('path');
const isDevelopment = process.env.NODE_ENV || 'development';

module.exports = {
  babelrc: true,
  devtool: isDevelopment == 'development' ? 'eval': null,
  module: {
    loaders: [{
	  test: /\.js$/,
	  include: path.join(__dirname, 'source'),
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
	new webpack.NoEmitOnErrorsPlugin(),
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
