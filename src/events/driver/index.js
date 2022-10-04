'use strict';
const events = require('../eventEmitter');
// const hub = require('../HUB');

function handleDriver(payload) {
  console.log(payload);
  // hub('inTransit', payload);
  hub('pickup', payload);
}
module.exports = handleDriver;
