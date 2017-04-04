import webpack from 'webpack';
import DashboardPlugin from 'webpack-dashboard/plugin';
import baseConfig from './webpack.config.base';

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
      new DashboardPlugin(),
   ],
   watch: true,
};
