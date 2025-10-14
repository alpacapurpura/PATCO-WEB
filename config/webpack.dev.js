const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const { default: merge } = require('webpack-merge');
const common = require('./webpack.common');

const path = require('path');

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    compress: true,
    hot: true,
    port: 3010,
  },
  target: 'web',
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new DefinePlugin({
      'process.env.AUDITOR': JSON.stringify(''),
      'process.env.TOKEN': JSON.stringify(''),
      'process.env.MS_AUTENTICACION': JSON.stringify(''),
    }),
  ],
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = merge(common, devConfig);
