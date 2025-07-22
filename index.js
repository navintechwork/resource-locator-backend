import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import productsRoute from './routes/productsRoute.js';
import iotDatasRoute from './routes/iotDatasRoute.js';
import adminRoute from './routes/adminRoute.js';
import resouceCategoryRoute from './routes/resouceCategoryRoute.js';
import resouceNameRoute from './routes/resouceNameRoute.js';
import addResourceRoute from './routes/addResourceRoute.js'
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/books', booksRoute);
app.use('/products', productsRoute);
app.use('/iot', iotDatasRoute);
app.use('/admin', adminRoute);
app.use('/resourceCategory', resouceCategoryRoute);
app.use('/resourceName', resouceNameRoute);
app.use('/addResource', addResourceRoute);


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
