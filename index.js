// express frame work is the popular frame work for Node js application and its widely used
const express = require('express');
const cookieSession = require('cookie-session');
const passport = require("passport");
// mongoose  is for using Mongo DB to store the data
const mongoose = require('mongoose');
const keys = require('./config/keys')
require('./models/users');
require('./services/passport');

const app = express();

app.use(cookieSession({
  maxAge:30*24*60*60*1000,
  keys:[keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session())

require('./routes/authRoutes')(app)




mongoose.connect(keys.mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true });


//body parser is used to parse the incoming request bodies before any request made
//const bodyParser = require('body-parser');

// dotenv is used for getting the env files from local 
const dotenv = require("dotenv");



//const session = require("express-session");









//app.use(bodyParser.json());

//app.use(passport.initialize());

//app.use(passport.session());

// app.use(session({
//   secret: 'process.env.SESSION_SECRET',
//   resave: true,
//   saveUninitialized: true,
// }));

dotenv.config()

// IMPORT MODELS
// require('./models/Products');

//IMPORT ROUTES
// require('./routes/productRoutes')(app);

// this code does that it will redirect all request to front end app unless if we specify any routes
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));

//   const path = require('path');
//   app.get('*', (req,res) => {
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   })

// }




// mongoose.Promise = global.Promise;

app.get('/',(req,res)=>{
  res.send({"Welcome":"to Node and React Project"})
})




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});