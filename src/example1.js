const React = require('react');
const { renderToString } = require('react-dom/server');

const renderLayout = require('./layouts');
const App = require('./ui/components/App');

module.exports = (req, res) => {
  const app = React.createElement(App);
  const markup = renderToString(app);
  return res.send(renderLayout(markup, 'example1.js'));
};
