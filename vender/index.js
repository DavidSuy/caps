'use strict';

const io = require('socket.io-client');
const Chance = require('chance');

const url = process.env.SERVER_URL || 'http://localhost:3002/caps';
const chance = new Chance();

const socket = io.connect(url);

socket.emit('pickup', {
  store: 'flowershop',
  orderId: chance.guid(),
  customer: chance.name(),
  address: chance.address(),
});

socket.on('delivered', () => {
  console.log('Thanks for delivering my package. 🙏');
});
