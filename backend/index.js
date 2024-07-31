const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT;

const app = express();

app.use(express.static('static'));
app.use(cors());

app.get('/api', (req, res) => {
  res.json({
    message: 'poo bum'
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})