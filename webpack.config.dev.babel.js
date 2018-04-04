import webpack from 'webpack'
import baseConfig from './webpack.config.base'

export default {
   ...baseConfig,
   devtool: 'cheap-module-eval-source-map',
   entry: [
      'webpack-hot-middleware/client',
      ...baseConfig.entry,
   ],
   plugins: [
      ...baseConfig.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
         __DEVELOPMENT__: true,
      }),
   ],
   watch: true,
}
