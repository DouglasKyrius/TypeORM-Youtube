import { Router } from 'express';
import classRouter from './class.routes';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Hello Kronos' }),
);

routes.use('/class', classRouter);

export default routes;
