const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();

//Enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// Set the server port
const port = process.env.PORT || 8080;

// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/timeTracker', { useNewUrlParser: true });
mongoose.set('debug', true);

// Get the Sprint model & its routes
require('./models/Sprint');
const sprint = require('./routes/sprint');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/sprint', sprint);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/angular-time-tracker/index.html'));
});

//Create HTTP server.
const server = http.createServer(app);

//Listen on port
server.listen(port, () => console.log(`API running on localhost:${port}`));

module.exports = app;