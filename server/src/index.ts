import http from 'http';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import router from './router';

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080/');
});

mongoose.Promise = Promise;
const mongoUri = 'mongodb://mongo:EDc4G6AFfbfd3FedA-4e5a-FHCDBC-c1@monorail.proxy.rlwy.net:28154';

mongoose
  .connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api', router());
