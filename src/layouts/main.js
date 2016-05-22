const base = require('./base');

module.exports = ({ markup, state, clientJs }) => base({
  title: 'Isomorphic React Examples',
  body: `
    <div class="container">
      <div id="app">${markup}</div>
    </div>
    ${state ? `<div id="state" data-state=${state} ></div>` : ''}
    <script src="https://fb.me/react-15.1.0.js"></script>
    <script src="https://fb.me/react-dom-15.1.0.js"></script>
    ${clientJs ? `<script src="/dist/${clientJs}"></script>` : ''}
  `,
});
