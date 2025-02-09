import express from 'express';
import { DB_URI, NODE_ENV, PORT } from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectTODatabse from './database/mongodb.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome To The Subscription Tracker API all Done ');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);


app.listen(PORT, async() => {
  console.log(`Subscription Tracker API Running on http://localhost:${PORT}`);

  await connectTODatabse();
  
});

export default app;
