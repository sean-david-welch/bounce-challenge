import http from 'http';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';

import router from './router';

import { swaggerSpec } from './utils/swagger';
import { Request, Response } from 'express';

export const app = express();

app.use(cors({ origin: ['http://localhost:3000', 'https://bounce-frontend-vite.onrender.com'], credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

app.use('/api', router());
// app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/docs.json', (request: Request, response: Response) => {
  response.setHeader('Content-Type', 'application/json');
  response.send(swaggerSpec);
});

mongoose.Promise = Promise;
const mongoUri = 'mongodb://mongo:EDc4G6AFfbfd3FedA-4e5a-FHCDBC-c1@monorail.proxy.rlwy.net:28154';

mongoose
  .connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

server.listen(433, '0.0.0.0', () => {
  console.log('Server running on port 433');
});
