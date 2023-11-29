import path from 'path';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';

import pageRouter from './Routes/pageRoutes.js';
import noteRouter from './Routes/noteRoutes.js';
import userRouter from './Routes/userRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Front-end View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Files
app.use('/public', express.static('public'));

// Morgan
app.use(morgan('dev'));

// HTTP Security Headers

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.2/axios.js',
        ],
      },
    },
  })
);

// Body Parser
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Limit requests from same IP
const limiter = rateLimit({
  max: 100,
  windowMs: 3600000,
  message: 'Too many requests from this IP, please try again later.',
});
app.use('/api', limiter);

// Routes
app.use('/', pageRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/notes', noteRouter);

export default app;
