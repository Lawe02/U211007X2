'use strict'

const express = require('express');

const app = express();
const port = 8022;
const indexRouter = require('./routes/index');

app.use(express.urlencoded());

app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(port);

console.log('Server up and running, listning on port: ' + port);




