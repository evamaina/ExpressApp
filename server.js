import express from 'express';
import userRouter from './src/user.router';

const app = express();

app.use(express.json());

// set up user router
app.use('/api', userRouter);

app.use('*', (req, res) => res.status(404).send({ message: 'the requested resource cannot be found' }));

app.listen(3000);
console.log('app running on port ', 3000);
