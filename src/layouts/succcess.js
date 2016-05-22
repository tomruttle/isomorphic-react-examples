module.exports = (formData) => (`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Success!</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
        integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <div class="container">
        <div class="text-center">
          <h3>\uD83C\uDF89 Congratulations! \uD83C\uDF89</h3>
          <p>You submitted a form!</p>
        </div>
        <p>Data:</p>
        <pre>${formData}</pre>
      </div
    </body>
  </html>
`);
