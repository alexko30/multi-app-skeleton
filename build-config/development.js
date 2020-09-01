const path = require('path');
const webpack = require('webpack');

const defaultConfig = require('./default');
const appConfig = require('./app');

module.exports = {
  ...defaultConfig,
  entry: {
    app: `./src/${appConfig.startupFileName}`,
  },
  mode: 'development',
  devServer: {
    hot: true,
    contentBase: defaultConfig.context,
    port: appConfig.port,
    host: '0.0.0.0',
    publicPath: '/',
    historyApiFallback: true,
    disableHostCheck: false,
    useLocalIp: true,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  devtool: 'cheap-module-eval-source-map',
};