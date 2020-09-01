const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const defaultConfig = require('./default');
const appConfig = require('./app');

module.exports = {
  ...defaultConfig,
  entry: {
    app: `./src/${appConfig.startupFileName}`,
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/[name].[hash].js',
    chunkFilename: 'assets/[name].[hash].js',
  },
  mode: 'production',
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        node_vendor: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
          priority: 1,
        },
      },
    },
  },
  devtool: 'source-map',
};
