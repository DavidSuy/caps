const io = require('socket.io');
const PORT = process.env.PORT || 3002;
const eventPool = require('./eventPool');

const server = io(PORT);

const caps = server.of('/caps');

caps.on('connection', (socket) => {
  console.log('New client connected!!!!!!!!!');

  eventPool.forEach((e) => {
    socket.on(e, (payload) => console.log(`EVENT: ${e}`, payload));
  });

  socket.on('pickup', (payload) => {
    // console.log('hub got picked message', payload);
    caps.emit('pickup', payload);
  });

  socket.on('in-transit', (payload) => console.log('Package in transit'));

  socket.on('delivered', (payload) => caps.emit('delivered', payload));
});

// eventPool.forEach((e) => {
//   caps.on(e, (payload) => console.log(`EVENT: ${e}`, payload));
// });
