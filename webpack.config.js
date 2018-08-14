const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bandle.js'
  },
  module: {
    rules: [
      {
        test: '/\.js/',
        exclude: '/node_modules',
        loader: 'babel-loader'
      },
      {
        test: '/\.scss/',
        use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader','sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin()
  ]
};
