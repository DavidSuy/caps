'use strict';

const events = require('../eventEmitter');
// ['pickup', 'inTransit', 'delivered']
const eventPool = require('../eventPool');
const vendor = require('../vendor');
const driver = require('../driver');

console.log(eventPool);

events.on('pickup', driver, { name: 'store' });
events.on('inTransit', handleHUB);
events.on('delivered', handleHUB);

function handleHUB(event, payload) {
  console.log(
    {
      event,
      time: new Date(),
      payload,
    }
    // if (event === eventPool[])
  );

  // events.on(eventPool[0], driver);
  // events.on(eventPool[1], () => console.log('something'));
  // events.on(eventPool[2], vendor);
}

module.exports = handleHUB;
