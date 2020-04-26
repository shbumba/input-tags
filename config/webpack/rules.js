import MiniCssExtractPlugin from 'mini-css-extract-plugin'
const env = process.env.NODE_ENV
const isDevelopment = env === 'development'

const styleLoader = isDevelopment
  ? 'style-loader'
  : {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDevelopment,
      },
    }

export default [
  {
    test: /\.html$/i,
    use: [
      {
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      },
    ],
  },
  {
    test: /\.ts$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        babelrc: true,
      },
    },
  },
  {
    test: /\.(sc|c)ss$/,
    exclude: /example/,
    use: [
      styleLoader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
        },
      },
      'postcss-loader',
    ],
  },
  {
    test: /\.example.(sc|c)ss$/,
    use: [
      styleLoader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: false,
        },
      },
      'postcss-loader',
    ],
  },
]
