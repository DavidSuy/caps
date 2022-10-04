'use strict';
// const events = require('./src/events/eventEmitter');
const events = require('./src/events');

events.emit('pickup', {
  store: 'flowershop',
  orderId: 'asoenthuasoenthu',
  customer: 'David',
  address: 'Seattle, WA',
});
