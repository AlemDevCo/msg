// api/message.js
const express = require('express');
const serverless = require('serverless-http');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.json());

app.post('/api/message', (req, res) => {
  const message = req.body.message;

  if (message.trim() !== '') {
    io.emit('message', message);
    res.json({ success: true });
  } else {
    res.status(400).json({ error: 'Message cannot be empty.' });
  }
});

module.exports.handler = serverless(app);
