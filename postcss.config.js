module.exports = ({ file, options, env }) => ({
  syntax: 'postcss-scss',
  plugins: {
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 3,
      browsers: ['last 2 versions', 'ie 11'],
    },
    cssnano: env === 'production' ? options.cssnano : false,
  },
})
