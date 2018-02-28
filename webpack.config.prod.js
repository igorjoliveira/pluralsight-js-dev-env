import path from 'path';
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import webpackMd5Hash from 'webpack-md5-hash';
import extractTextPlugin from 'extract-text-webpack-plugin';

export default {
  entry: {
    commons: path.resolve(__dirname, 'src/commons'),
    main: path.resolve(__dirname, 'src/index'),
    user: path.resolve(__dirname, 'src/user')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new extractTextPlugin('[name].[contenthash].css'),
    new webpackMd5Hash(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons'
    }),
    new htmlWebpackPlugin({
      title: "Home",
      filename: "index.html",
      template: 'src/index.html',
      chunks: ['commons', 'main'],
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new htmlWebpackPlugin({
      title: "Users",
      filename: "user.html",
      template: 'src/user.html',
      chunks: ['commons', 'user'],
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new webpack.SourceMapDevToolPlugin({ filename: '[file].map' }),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }) //Minify JS
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use:
          [
            {
              loader: 'css-loader',
              options:
              {
                sourceMap: true,
                minimize: true
              }
            }
          ]
        })
      }
    ]
  }
}
