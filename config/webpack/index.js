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
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      },
    },
  }),
)

export default entriesConfig
