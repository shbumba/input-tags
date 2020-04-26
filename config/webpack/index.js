import { entry, example } from './entries'
import plugins from './plugins'
import rules from './rules'

import * as path from 'path'
import merge from 'webpack-merge'

const env = process.env.NODE_ENV
const isProduction = env === 'production'

const entriesConfig = [entry, example].map(entry =>
  merge(entry, {
    plugins,
    mode: isProduction ? 'production' : 'development',
    module: { rules },
    resolve: {
      extensions: ['.ts', '.js', '.json'],
      alias: {
        src: path.resolve(process.cwd(), 'src'),
      },
    },
    performance: {
      hints: 'warning',
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    devtool: isProduction ? false : 'source-map',
    devServer: {
      port: 3001,
      inline: true,
      hot: true,
      disableHostCheck: true,
      historyApiFallback: true,
    },
  }),
)

export default entriesConfig
