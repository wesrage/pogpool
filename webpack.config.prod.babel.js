import webpack from 'webpack';
import baseConfig from './webpack.config.base';

export default {
   ...baseConfig,
   plugins: [
      ...baseConfig.plugins,
      new webpack.DefinePlugin({
         'process.env': {
            NODE_ENV: JSON.stringify('production'),
         },
         __DEVELOPMENT__: false,
      }),
      new webpack.optimize.UglifyJsPlugin(),
   ],
};
