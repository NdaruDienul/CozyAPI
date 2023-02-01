const express = require('express');
const data = require('./data');

const app = express();

app.get('/', (req, res) => res.status(200).json(data));

app.listen(5000, () => {
  // eslint-disable-next-line no-console
  console.log(`ok jalan`);
});

module.exports = app;
