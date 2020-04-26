import * as path from 'path'
// eslint-disable-next-line
import { Configuration } from 'webpack'
// eslint-disable-next-line
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

/** @type {Configuration} */
const config = {
  name: 'input-tag',
  entry: {
    'input-tag': [
      'core-js/modules/es.array.iterator',
      'core-js/modules/es.object.entries',
      './src/index.ts',
    ],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(process.cwd(), 'dist'),
  },
  plugins: [new CleanWebpackPlugin()],
}

export default config
