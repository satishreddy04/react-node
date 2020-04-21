// express frame work is the popular frame work for Node js application and its widely used
const express = require('express');
// mongoose  is for using Mongo DB to store the data
const mongoose = require('mongoose');
//body parser is used to parse the incoming request bodies before any request made
const bodyParser = require('body-parser');
// dotenv is used for getting the env files from local 
const dotenv = require("dotenv");

const app = express();

app.use(bodyParser.json());

dotenv.config()

// IMPORT MODELS
require('./models/Products');

//IMPORT ROUTES
require('./routes/productRoutes')(app);

// this code does that it will redirect all request to front end app unless if we specify any routes
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}



mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});