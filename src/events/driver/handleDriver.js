'use strict';

const handleDriver = (socket) => (payload) => {
  console.log('driver');
  events.emit('in-transit', payload);
  setTimeout(() => events.emit('delivered', payload), 3000);
};

module.exports = handleDriver;
