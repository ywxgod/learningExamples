var webpack = require("webpack");
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    "app": "./app/main"
  },
  output: {
    path: path.join(__dirname,'dist'),
    filename: "./[name].bundle.js"
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  //devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'angular2 test',
        template:'./index.html'
    })
  ]
}