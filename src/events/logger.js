'use strict';

function logger(event, payload) {
  console.log({
    event,
    time: new Date(),
    payload,
  });
}

module.exports = logger;
