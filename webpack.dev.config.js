const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: __dirname,
    filename: './release/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, './release'),  // 设置根目录
    open: true, // 运行自动打开
    port: 9000
  }
}
