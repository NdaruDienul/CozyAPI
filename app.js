import express from 'express';
import data from './data.js';

const app = express();

app.get('/', (req, res) => res.status(200).json(data));

app.listen(5000, () => {
  // eslint-disable-next-line no-console
  console.log(`ok jalan`);
});

