async function server(inputData, dataForSearch) {
  const express = require('express');
  const bodyParser = require('body-parser');
  const calc = require('../calculations/calculator');
  const api = require('../node-api-call/api');

  const app = express();

  let info;

  app.use(express.static('./Public'));
  const PORT = process.env.PORT || 3000;
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.get('/', (req, res) => {
    res.send(index.html);
  });

  app.post('/submit', async (req, res) => {
    if (req) {
      inputData = req.body;
      console.log(inputData);
      dataForSearch = calc.calculator(inputData);
      info = await api.callMealDB(dataForSearch);
      console.log(info);
    } else {
      res.sendStatus(404);
    }
  });

  app.get('/food', (req, res) => {
    console.log(info);
    res.send(info);
  });

  app.listen(PORT);
}

module.exports = {
  server,
};
