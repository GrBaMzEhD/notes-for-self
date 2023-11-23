import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: './config.env' });

import app from './app.js';

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, { dbName: process.env.DATABASE_NAME })
  .then((con) => console.log('DB connection successful'));

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION.');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
