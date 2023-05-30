import dotenv from 'dotenv';
import { resolve } from 'path';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

import './database';

import express from 'express';
import HomeRoutes from './routes/homeRoutes';
import UserRoutes from './routes/userRoutes';
import AlunoRoutes from './routes/AlunoRoutes';
import TokenRoutes from './routes/tokenRoutes';
import FotoRoutes from './routes/fotoRoutes';

const whiteList = [
  'http://localhost:3001',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', HomeRoutes);
    this.app.use('/users/', UserRoutes);
    this.app.use('/alunos/', AlunoRoutes);
    this.app.use('/tokens/', TokenRoutes);
    this.app.use('/fotos/', FotoRoutes);
  }
}

export default new App().app;
