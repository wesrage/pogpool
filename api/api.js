import express from 'express'
import compression from 'compression'
import cors from 'cors'
import bodyParser from 'body-parser'
import { createRoutes } from './routes'
import { API_HOST, API_PORT } from './config'

const app = express()
app.use(compression())
app.use(cors())
app.use(bodyParser.json())

createRoutes(app)

app.use((req, res) => {
  res.status(404).end('NOT FOUND')
})

if (API_PORT) {
  app.listen(API_PORT, err => {
    if (err) {
      console.error(err)
    }
    console.info(`----\n==> 🌎  API is running on port ${API_PORT}`)
    console.info(`==> 💻  Send requests to http://${API_HOST}:${API_PORT}`)
  })
} else {
  console.error(
    '==>     ERROR: No API_PORT environment variable has been specified'
  )
}
