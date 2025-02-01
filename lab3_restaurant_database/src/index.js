require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const restaurantRouter = require('./route/restaurantRoutes.js');
const errorHandler = require('./middleware/errorHandler.js');
const SERVER_PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


async function run() {
  try {
  
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongo db")
    await mongoose.connection.db.admin().command({ ping: 1 });
    
    app.get('/', (req, res) => {
        res.send('Welcome to Lab 3: Restaurants');
    })

    app.use('/', restaurantRouter);

    app.use(errorHandler);

    app.listen(SERVER_PORT, () => { console.log('Server is running...') });


  } finally {
    // await mongoose.disconnect();
  }
}

run().catch(console.dir); 

