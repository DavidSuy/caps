const events = require('./eventEmitter');
const eventPool = require('./eventPool');
const driver = require('./driver');
const vendor = require('./vendor');
const logger = require('./logger');

// logger listener
for (let e of eventPool) {
  events.on(e, (payload) => logger(e, payload));
}

events.on('pickup', driver);
events.on('in-transit', () => console.log('Package in transit!'));
events.on('delivered', vendor);

module.exports = events;
