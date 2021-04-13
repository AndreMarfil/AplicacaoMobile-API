const express = require('express');
const api = require('sinesp-api');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  const { placa } = req.query;

  const car = await api.search(placa);
  res.send(car);
});

app.listen(3333, () => {
  console.log('Api está rodando');
});
