'use strict';
const events = require('./src/events/eventEmitter');

// events.on('pick', )
const vendor = require('./src/events/vendor');

vendor({
  store: 'flowershop',
  orderId: 'asoenthuasoenthu',
  customer: 'David',
  address: 'Seattle, WA',
});
