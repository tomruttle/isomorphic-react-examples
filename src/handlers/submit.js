const validValues = ['123', 'test', 'hello'];

module.exports = (req, res) => {
  let refreshHeader;
  let status;

  const text = req.body.text;

  if (!text || validValues.indexOf(text) === -1) {
    const error = text ? `'${text}' is not valid!` : 'text is required!';
    refreshHeader = `0;url=/failure?error=${encodeURIComponent(error)}`;
    status = 400;
  } else {
    refreshHeader = `0;url=/success?formData=${encodeURIComponent(JSON.stringify(req.body))}`;
    status = 201;
  }

  return res.status(status).set('Refresh', refreshHeader).send();
};

module.exports.validValues = validValues;
