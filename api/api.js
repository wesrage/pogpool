/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import { createRoutes } from './routes';

const { API_HOST, API_PORT } = process.env;

const app = express();

app.use(bodyParser.json());

createRoutes(app);

app.use((req, res) => {
   res.status(404).end('NOT FOUND');
});

if (API_PORT) {
   app.listen(API_PORT, (err) => {
      if (err) {
         console.error(err);
      }
      console.info(`----\n==> 🌎  API is running on port ${API_PORT}`);
      console.info(`==> 💻  Send requests to http://${API_HOST}:${API_PORT}`);
   });
} else {
   console.error('==>     ERROR: No API_PORT environment variable has been specified');
}
