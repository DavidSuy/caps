'use strict';

const io = require('socket.io-client');

const url = process.env.SERVER_URL || 'http://localhost:3002/caps';

const socket = io.connect(url);

socket.on('pickup', (payload) => {
  // console.log('Driver: Order picked up', payload);
  socket.emit('in-transit', payload);
  setTimeout(() => {
    socket.emit('delivered', payload);
  }, 3000);
});
