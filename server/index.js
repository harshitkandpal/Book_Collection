import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import './db.js'
import { AdminRouter } from './routes/auth.js';
import { studentRouter } from './routes/student.js';
import { bookRouter } from './routes/book.js';

const app = express();
app.use(express.json())
const corsOptions = {
    origin: 'http://localhost:5173', // Correctly specify the frontend origin without path
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  };
  
  app.use(cors(corsOptions));
app.use(cookieParser())
dotenv.config();
app.use('/auth', AdminRouter);
app.use('/student', studentRouter);
app.use('/book', bookRouter);


app.listen(process.env.PORT,()=>{
    console.log('listening on port');
});