require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes.js')
const errorHandler = require('./errorHandler.js')
const SERVER_PORT = process.env.PORT || 3000;

// configure environment (based on current .env)
var nodeEnv = process.env.NODE_ENV || "development";
require('dotenv').config({ path: `.env.${nodeEnv}`});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function run() {
  try {
  
    await mongoose.connect(process.env.MONGO_URI);
    await mongoose.connection.db.admin().command({ ping: 1 });
    
    app.get('/', (req, res) => {
        res.send('Welcome to Assignment 1');
    })

    app.use('/api/v1/user', userRouter);

    app.use(errorHandler);

    app.listen(SERVER_PORT, () => { console.log('Server is running...') });
  

  } finally {
    // await mongoose.disconnect();
  }
}

run().catch(console.dir); 

