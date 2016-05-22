const React = require('react');
const { render } = require('react-dom');

const App = require('./components/App');
const app = React.createElement(App);
const container = document.getElementById('app');

render(app, container, () => { console.log('Loaded JS'); });
