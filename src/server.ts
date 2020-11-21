import dotenv from 'dotenv';
import 'reflect-metadata';
import express from 'express';
import './database';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

dotenv.config();

app.listen(process.env.PORT || 3333, () => {
  console.log('🏃 Running Server on port :3333');
});
