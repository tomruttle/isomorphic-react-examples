const express = require('express');

const example1 = require('./src/example1');
const example2 = require('./src/example2');
const example3 = require('./src/example3');
const example4 = require('./src/example4');

const port = 3000;

express()
  .get('/example1', example1)
  .get('/example2', example2)
  .get('/example3', example3)
  .get('/example4', example4)
  .use('/dist', express.static('dist'))
  .listen(port, () => { console.info(`App listening on port ${port}`); });
