const React = require('react');
const { render } = require('react-dom');

const App = require('./components/Example2');
const app = React.createElement(App);
const container = document.getElementById('app');

render(app, container, () => { console.log('Loaded JS'); });
