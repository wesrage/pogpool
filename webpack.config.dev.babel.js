import webpack from 'webpack';
import DashboardPlugin from 'webpack-dashboard/plugin';
import baseConfig from './webpack.config.base';

export default {
   ...baseConfig,
   // devtool: 'cheap-module-eval-source-map',
   devtool: 'eval',
   entry: [
      'webpack-hot-middleware/client',
      ...baseConfig.entry,
   ],
   plugins: [
      ...baseConfig.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new DashboardPlugin(),
   ],
   watch: true,
};
