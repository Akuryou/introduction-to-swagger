var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/entry.js'],
  resolve: {
    root: __dirname,
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css"},
      {test: /\.eot$/, loader: "file"},
      {test: /\.ttf$/, loader: "file"},
      {test: /\.woff$/, loader: "file"}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: 'src/index.jade',
    }),
  ]
};
