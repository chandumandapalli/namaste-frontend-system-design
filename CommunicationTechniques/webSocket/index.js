const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

// Here establishing a socket connectioin using io.on ( ' connection ') 
// this gives call back with socket .. and usign that socket .. listtenign to custom event & emitting msgs respectively .. 
io.on('connection', (socket) => {
  console.log('Connection established');
// Here 'chat 'message' is a custom event 
  socket.on('chat message', (msg) => {
    console.log('received message', msg);
    io.emit('chat message', msg);
  });
// Here disconnect is a custom event. 
  socket.on('disconnect', () => {
    console.log('User disconnected!');
  })
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
