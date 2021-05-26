const express = require('express');
const api = require('sinesp-api');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  const { placa } = req.query;

 
  try {
    const car = await api.search(placa);
    res.send(car);
    
  } catch (error) {
    console.log(error.data);
    res.status(400).json({error});
    
  }
  
});
var porta = process.env.PORT || 8080;

app.listen(porta, () => {
  console.log('Api está rodando');
});
