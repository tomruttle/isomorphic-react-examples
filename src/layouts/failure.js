const base = require('./base');

module.exports = (error) => base({
  title: 'Failure!',
  body: `
    <div class="container">
      <div class="text-center">
        <h3>\uD83D\uDC80 BOOOOOOO! \uD83D\uDC80</h3>
        <p>You failed to submit a form!</p>
      </div>
      <p>Error:</p>
      <pre>${error}</pre>
    </div
  `,
});
