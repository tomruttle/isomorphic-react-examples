const base = require('./base');

module.exports = (formData) => base({
  title: 'Success!',
  body: `
    <div class="container">
      <div class="text-center">
        <h3>\uD83C\uDF89 Congratulations! \uD83C\uDF89</h3>
        <p>You submitted a form!</p>
      </div>
      <p>Data:</p>
      <pre>${formData}</pre>
    </div
  `,
});
