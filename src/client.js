'use strict';

const io = require('socket.io-client');
const URL = process.env.SERVER_URL || 'http://localhost:3002';

let socket = io.connect(URL);
