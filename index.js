/* eslint no-console: ["warn", { allow: ["info"] }] */

require('babel-register');

const express = require('express');

const { example1, example2, example3, example4 } = require('./src');

const port = 3000;

express()
  .get('/example1', example1)
  .get('/example2', example2)
  .get('/example3', example3)
  .get('/example4', example4)
  .use('/dist', express.static('dist'))
  .listen(port, () => { console.info(`App listening on port ${port}`); });
