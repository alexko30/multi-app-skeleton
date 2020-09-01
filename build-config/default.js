const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '..'),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|service-worker)/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ hash: false, template: './index.hbs', inject: true }),
  ],
};

