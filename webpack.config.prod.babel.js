import webpack from 'webpack';
import baseConfig from './webpack.config.base';

export default {
   ...baseConfig,
   plugins: [
      ...baseConfig.plugins,
      new webpack.optimize.UglifyJsPlugin(),
   ],
};
