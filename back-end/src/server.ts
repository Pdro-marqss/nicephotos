import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { routes } from './routes';
import { AppError } from "./errors/AppError";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
   if (err instanceof AppError) {
      return response.status(err.statusCode).json({
         status: "error",
         message: err.message
      })
   }

   return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`
   });
});

app.listen(3333, () => console.log("Server is running in port 3333 👽"));