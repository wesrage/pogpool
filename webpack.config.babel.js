import path from 'path'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

export default {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/env', { modules: false }], '@babel/react'],
            plugins: [
              'syntax-dynamic-import',
              'babel-plugin-styled-components',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new webpack.DefinePlugin({
      API_HOST: JSON.stringify(process.env.API_HOST),
      API_PORT: JSON.stringify(process.env.API_PORT),
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    namedChunks: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: /node_modules/,
          enforce: true,
        },
      },
    },
  },
}
