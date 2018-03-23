const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './app.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ]
  }
}

