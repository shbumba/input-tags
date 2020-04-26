import * as path from 'path'
// eslint-disable-next-line
import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
// eslint-disable-next-line
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

/** @type {Configuration} */
const config = {
  name: 'example',
  entry: [
    'core-js/modules/es.promise',
    'core-js/modules/es.array.iterator',
    'core-js/modules/es.object.entries',
    'regenerator-runtime/runtime',
    './src/example/index.ts',
  ],
  output: {
    path: path.join(process.cwd(), 'example'),
    filename: '[name].[hash].js',
    publicPath: './',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: process.env.WIDGET_TITLE,
      template: 'src/example/index.html',
      filename: 'index.html',
    }),
  ],
}

export default config
