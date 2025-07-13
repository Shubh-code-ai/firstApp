import express, { Application } from 'express';

const app: Application = express();

app.get('/', (req, res) => {
  res.send('Hello from TypeScript + Express 🎉');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});