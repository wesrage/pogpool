import webpack from 'webpack';
import baseConfig from './webpack.config.base';

export default {
   ...baseConfig,
   plugins: [
      ...baseConfig.plugins,
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.DefinePlugin({
         API_HOST: JSON.stringify(process.env.API_HOST),
         API_PORT: JSON.stringify(process.env.API_PORT),
         __DEVELOPMENT__: false,
         'process.env': {
            NODE_ENV: JSON.stringify('production'),
         },
      }),
   ],
};
