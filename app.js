const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apiController = require('./controllers/apiController');

const port = 3000;

app.use("/assets", express.static(__dirname + "/public"));
//mongo instead of localhost for docker-compose
mongoose.connect(
  "mongodb://mongo:27017/users",
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    console.log(err);
  }
);

apiController(app);

app.listen(port);
console.log('listening on port 3000');