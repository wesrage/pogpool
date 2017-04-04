/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import compression from 'compression';
import httpProxy from 'http-proxy';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.dev.babel';

const { API_HOST, API_PORT, HTTP_PORT } = process.env;
const app = express();
const compiler = webpack(webpackConfig);
const proxy = httpProxy.createProxyServer({
   target: `http://${API_HOST}:${API_PORT}`,
});

app.use(compression());
app.use(webpackDevMiddleware(compiler, {
   noInfo: true,
   stats: { colors: true },
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('dist'));
app.use('/api', proxy.web);

app.listen(HTTP_PORT, () => {
   console.log(`listening on ${HTTP_PORT}`); // eslint-disable-line
});
