const React = require('react');
const { renderToString } = require('react-dom/server');

const renderLayout = require('../layouts/main');
const App = require('../ui/components/Example2');

const clientJs = 'example2.js';

module.exports = (req, res) => {
  const app = React.createElement(App);
  const markup = renderToString(app);
  return res.send(renderLayout({ markup, clientJs }));
};
