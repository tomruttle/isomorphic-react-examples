const renderLayout = require('./layouts');

module.exports = (req, res) =>
  res.send(renderLayout('', 'example2.js'));
