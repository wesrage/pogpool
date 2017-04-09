/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import { createRoutes } from './routes';

const { API_HOST, API_PORT } = process.env;

const app = express();
app.use(compression());
app.use(
   cors({
      origin: process.env.HTTP_HOST,
      optionsSuccessStatus: 200,
   }),
);
app.use(bodyParser.json());

createRoutes(app);

app.use((req, res) => {
   res.status(404).end('NOT FOUND');
});

if (API_PORT) {
   app.listen(API_PORT, err => {
      if (err) {
         console.error(err);
      }
      console.info('----\n==> 🌎  API is running on port %s', API_PORT);
      console.info('==> 💻  Send requests to http://%s:%s', API_HOST, API_PORT);
   });
} else {
   console.error('==>     ERROR: No API_PORT environment variable has been specified');
}
