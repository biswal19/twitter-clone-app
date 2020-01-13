const express = require('express')
const dotenv = require('dotenv') 
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')

const users = require('./routes/users')
const posts = require('./routes/posts')

// setup environment
dotenv.config()

// mongo db connect
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(
  () => { 
    console.log("mongoose connected successfully");
   
    startWebServer();
  },
  err => {
    console.log("mongoose did not connect",err);
   }
);

function startWebServer(){

  const app = express();

  app.get("/api/publicinformation", function (req, res) {
    res.send("Anyone can see this");
  });

  app.use(express.static("public"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cors())

  app.use(passport.initialize())
  require('./config/passport')(passport)

  app.use('/api/users', users)
  app.use('/api/posts', posts)

  // run app
  const PORT = process.env.PORT || 5001
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  }