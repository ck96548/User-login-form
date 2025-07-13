const express = require('express');
const app = express();  
const userRouter = require('./routes/user.route');
const connectToDb = require('./configs/db.config');
const port = 3000;

app.use(express.json());

app.use(userRouter);

app.listen(port, async()=>{
  console.log(`Server is running on http://localhost:${port}`);
  await connectToDb();
  console.log('Connected to mongoDB');
});