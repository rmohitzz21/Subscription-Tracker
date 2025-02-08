import express from 'express';
import { PORT } from './config/env.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome To The Subscription Tracker API all Done ');
});

app.listen(PORT, () => {
  console.log(`Subscription Tracker API Running on http://localhost:${PORT}`);
});

export default app;
