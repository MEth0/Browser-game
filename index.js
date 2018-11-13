const express = require('express');
const http = require('http');
const socket = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socket(server);

app.use(express.static('public'))

var players = {};

io.on('connection', (socket) => {

  socket.on('player join', () => {
    players[socket.id] = {
      x: 300,
      y: 300
    };
  });

  socket.on('movement', (data) => {
    var player = players[socket.id] || {};
    if (data.movement.left && player.x > 0) {
      player.x -= 5;
    }
    if (data.movement.up && player.y > 0) {
      player.y -= 5;
    }
    if (data.movement.right && player.x < data.canvas.width - 100) {
      player.x += 5;
    }
    if (data.movement.down && player.y < data.canvas.height - 100) {
      player.y += 5;
    }
  });

  socket.on('disconnect', () => {
    console.log(JSON.stringify(players));
    delete players[socket.id];
  });

});

setInterval(() => {
  io.sockets.emit('state', players);
}, 1000 / 60);

server.listen(3000);
