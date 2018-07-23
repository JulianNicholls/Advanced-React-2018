// Server entry point

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./router');

// DB setup

mongoose.connect(
  'mongodb://127.0.0.1:27017/auth',
  { useNewUrlParser: true }
);

// App setup

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
app.use(cors({ origin: 'http://localhost:3000' }));

router(app);

// Server setup

const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log('Server running on port', port);
