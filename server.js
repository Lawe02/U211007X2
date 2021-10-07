'use strict'

const express = require('express');
const router = require('.routes');
const app = express();
const port = 8022;

app.use(express.static('public'));

app.use('/', indexrouter);

app.listen(port);

console.log('Server up and running, listning on port: ' + port);




