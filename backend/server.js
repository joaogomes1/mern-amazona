import express from 'express';
import data from './data.js';

const app = express(); // app is an object (a pointer?)

app.get('/api/products', (req, res) => {
  // res is an object
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
