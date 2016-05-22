/* eslint no-console: ["warn", { allow: ["info"] }] */

require('babel-register');

const express = require('express');
const bodyParser = require('body-parser');

const success = require('./src/layouts/succcess');
const failure = require('./src/layouts/failure');
const { example1, example2, example3, submit } = require('./src/handlers');

const port = 3000;

express()
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use('/dist', express.static('dist'))
  .get('/example1', example1)
  .get('/example2', example2)
  .get('/example3', example3)
  .get('/success', (req, res) => {
    const markup = success(decodeURIComponent(req.query.formData));
    return res.send(markup);
  })
  .get('/failure', (req, res) => {
    const markup = failure(decodeURIComponent(req.query.error));
    return res.send(markup);
  })
  .post('/', submit)
  .listen(port, () => { console.info(`App listening on port ${port}`); });
