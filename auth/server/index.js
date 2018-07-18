// Server entry point

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// App setup

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

// Server setup

const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log('Server running on port', port);
