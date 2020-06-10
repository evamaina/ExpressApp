import express from 'express';
import userRouter from './src/user.router';
const app = express()

app.use(express.json())

// set up user router
app.use('/api', userRouter)

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'Hello!'});
})

app.listen(3000)
console.log('app running on port ', 3000);