const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'poo bum'
  });
});

app.listen(3001, () => {
  console.log('Listening on port 3001')
})