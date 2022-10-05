'use strict';
const io = require('socket.io-client');
const URL = process.env.SERVER_URL || 'http://localhost:3002';
const handleDriver = require('./handleDriver');

console.log('hi');
// const socket = io.connect(`${URL}/tracking`);
const socket = io.connect(`${URL}/caps`);

socket.on('pickup', () => console.log('picked up'));
// socket.emit('pickup', { text: 'asonetuhs' });
// socket.on('pickup', handleDriver(socket));
