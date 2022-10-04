'use strict';

const events = require('../eventEmitter');
const hub = require('../HUB');

function handleVendor(storeName) {
  console.log(`vendor`);
  hub('pickup', {
    store: storeName,
  });
  events.emit('pickup', {
    store: storeName,
  });
  events.on('delivered', (name) => console.log(`Thank you, ${name}`));
}

module.exports = handleVendor;
