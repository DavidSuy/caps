'use strict';

const events = require('../eventEmitter');

function handleVendor(payload) {
  console.log(`vendor`);
  console.log('Thank you', payload.store);
  // events.on('delivered', (name) => console.log(`Thank you, ${name}`));
}

module.exports = handleVendor;
