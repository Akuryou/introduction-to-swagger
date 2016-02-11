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
      {test: /\.jade$/, loader: 'apply-loader!jade-loader'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.(jpe?g|png|gif|svg)$/i, loader:'file'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
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
