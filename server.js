import express from 'express'
import compression from 'compression'
import httpProxy from 'http-proxy'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from './webpack.config.babel'

const { API_HOST, API_PORT, HTTP_PORT } = process.env
const app = express()
const compiler = webpack(webpackConfig)
const proxy = httpProxy.createProxyServer({
  target: `http://${API_HOST}:${API_PORT}`,
})

app.use(compression())
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    stats: { colors: true },
  })
)
app.use(express.static('dist'))
app.use('/api', proxy.web)

app.listen(HTTP_PORT, () => {
  console.log(`  >>> http://localhost:${HTTP_PORT} <<<`)
})
