
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const devConfig = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    status: 'errors-only',

  },
  devtool: 'cheap-source-map',
};

module.exports = merge(baseConfig, devConfig);
