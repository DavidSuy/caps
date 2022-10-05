'use strict';

// const events = require('./src/events');
const caps = require('./src/server');

setInterval(() => {
  caps.emit('pickup', {
    store: 'flowershop',
    orderId: 'asoenthuasoenthu',
    customer: 'David',
    address: 'Seattle, WA',
  });
}, 3000);
