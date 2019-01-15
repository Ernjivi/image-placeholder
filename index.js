// https://github.com/Ernjivi/node-express
const express = require('express');
const parsers = require('./parsers');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo!');
});

app.get('/:dimentions', (req, res) => {
  console.log(req.params);
  res.send('Dimentions');
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// '100' [100]
// '100x150' [100, 100]