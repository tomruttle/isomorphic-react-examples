module.exports = (markup, clientJs) => `
<!DOCTYPE html>
<html>
  <head>
    <title>Isomorphic React Examples</title>
  </head>
  <body>
    <div id="app">${markup}</div>
    <script src="https://fb.me/react-15.1.0.js"></script>
    <script src="https://fb.me/react-dom-15.1.0.js"></script>
    <script src="/dist/${clientJs}"></script>
  </body>
</html>
`;
