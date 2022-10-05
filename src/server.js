'use strict';

const io = require('socket.io');
const PORT = process.env.PORT || 3002;
const eventPool = require('./events/eventPool');

let server = io(`${PORT}`);
const caps = server.of('/caps');

caps.on('connection', (socket) => {
  console.log('Client connected', socket.id);

  for (let event of eventPool) {
    socket.on(event, (payload) => {
      console.log({
        event,
        time: new Date(),
        payload,
      });
    });
  }

  // socket.on('pickup', (payload) => socket.br )
  socket.on('pickup', () => console.log('pickup'));
  caps.on('pickup', () => console.log('xxxxxx'));
});

module.exports = caps;
