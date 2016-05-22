const React = require('react');
const { renderToString } = require('react-dom/server');

const renderLayout = require('../layouts/main');
const App = require('../ui/components/Example3');
const { validValues } = require('./submit');

const clientJs = 'example3.js';
const props = { validValues, defaultValue: 'shared' };

module.exports = (req, res) => {
  const app = React.createElement(App, props);
  const markup = renderToString(app);
  return res.send(renderLayout({ markup, clientJs, state: JSON.stringify(props) }));
};
