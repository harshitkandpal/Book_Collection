import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import './db.js'
import { AdminRouter } from './routes/auth.js';
import { bookRouter } from './routes/book.js';

const app = express();
app.use(express.json())
const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true, 
  };
  
  app.use(cors(corsOptions));
app.use(cookieParser())
dotenv.config();
app.use('/auth', AdminRouter);
app.use('/book', bookRouter);


app.listen(process.env.PORT,()=>{
    console.log('listening on port');
});