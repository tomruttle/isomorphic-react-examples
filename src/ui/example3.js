const React = require('react');
const { render } = require('react-dom');

const App = require('./components/Example3');
const container = document.getElementById('app');
const dataContainer = document.getElementById('state');

const state = dataContainer.dataset.state;
const app = React.createElement(App, JSON.parse(state));

setTimeout(() => render(app, container, () => { console.log('Loaded JS'); }), 2000);
