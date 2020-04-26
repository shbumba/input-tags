import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
// eslint-disable-next-line
import { HotModuleReplacementPlugin, Plugin } from 'webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const env = process.env.NODE_ENV
const isDevelopment = env === 'development'

/** @type {Plugin[]} */
let plugins = [
  new MiniCssExtractPlugin({
    filename: isDevelopment ? '[name].css' : '[name].[hash].css',
  }),
]

if (isDevelopment) {
  plugins = plugins.concat([
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({ useTypescriptIncrementalApi: false }),
  ])
}

if (process.env.BUNDLE_SIZE) {
  plugins = plugins.concat(new BundleAnalyzerPlugin())
}

export default plugins
