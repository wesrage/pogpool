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
      }),
      new webpack.optimize.UglifyJsPlugin(),
   ],
};
