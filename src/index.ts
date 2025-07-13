import express, { Application, Request, Response } from 'express';
import connectDB from './config/db';
connectDB(); // ✅ DB connection established


const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript + Express 🎉');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
