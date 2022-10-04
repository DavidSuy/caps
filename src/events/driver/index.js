'use strict';
const events = require('../eventEmitter.js');
// const hub = require('../HUB');

function handleDriver(payload) {
  console.log('driver');
  events.emit('in-transit', payload);
  setTimeout(() => events.emit('delivered', payload), 3000);
}

module.exports = handleDriver;
