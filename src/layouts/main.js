module.exports = ({ markup, state, clientJs }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Isomorphic React Examples</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
      integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <div id="app">${markup}</div>
    </div>
    ${state ? `<div id="state" data-state=${state} ></div>` : ''}
    <script src="https://fb.me/react-15.1.0.js"></script>
    <script src="https://fb.me/react-dom-15.1.0.js"></script>
    ${clientJs ? `<script src="/dist/${clientJs}"></script>` : ''}
  </body>
</html>
`;
