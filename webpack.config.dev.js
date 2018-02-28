import path from 'path';
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'inline-source-map',
  target: 'web',
  entry: {
    commons: path.resolve(__dirname, 'src/commons'),
    index: path.resolve(__dirname, 'src/index'),
    user: path.resolve(__dirname, 'src/user')
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "index",
      template: 'src/index.html',
      inject: true,
      chunks: ['commons', 'index'],
    }),
    new htmlWebpackPlugin({
      title: "users",
      filename: "user.html",
      template: 'src/user.html',
      inject: true,
      chunks: ['commons', 'user'],
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
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
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
}
