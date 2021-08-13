import 'reflect-metadata';
import express from 'express';
import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import routes from './routes/index';

createConnection().then(() => {
  dotenv.config();

  const app = express();
  const port = process.env.PORT;

  app.use(express.json());
  app.use(routes);

  app.listen(port);
});
