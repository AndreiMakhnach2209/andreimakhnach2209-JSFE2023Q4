/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.svg$/, use: 'svg-inline-loader' },
      { test: /\.css$/, 
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { modules: true }
          }
        ]
      },
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.(png|svg|jpe?g|webp|avif|gif|ico)$/i,
        type: 'asset',
        generator: {
          filename: 'images/[name][ext]',
        },
        parser: {
          dataUrlCondition: { 
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(mp3?4|ogg|wav|flac|aac|mp4|webm)$/i,
        type: 'asset',
        generator: {
          filename: 'audio/[name][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'production'
}
