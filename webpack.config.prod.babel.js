import baseConfig from './webpack.config.babel'

export default {
  ...baseConfig,
  mode: 'production',
  devtool: undefined,
}
