
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path              = require('path');

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    path       : path.resolve(__dirname, 'dist'),
    filename   : 'bundle.js',
    publicPath : '/'
  },
  module: {
    rules: [
      {
        test    : /\.(js|jsx)$/,
        exclude : /node_modules/,
        use     : ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions : ['.js', '.jsx'],
    modules    : ['node_modules', 'public', 'src']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title    : 'React + Babel + webpack 🍽',
      template : 'public/html/index.html',
      favicon  : 'public/icon/favicon.ico'
    })
  ]
};
