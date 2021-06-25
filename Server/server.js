async function server(inputData, dataForSearch) {
  const express = require('express');
  const bodyParser = require('body-parser');
  const calc = require('../calculations/calculator');
  const api = require('../node-api-call/api');
  const htmlConstructor = require('../calculations/createHtml');
  const createArrayIngredient = require('../calculations/createObjectArray');

  const app = express();

  let info;
  let html;

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
      info = createArrayIngredient(await info);
      html = htmlConstructor.createHtmlLayout(await info);
    } else {
      res.sendStatus(404);
    }
  });

  app.get('/food', (req, res) => {
    console.log(html);
    res.send(html);
  });

  app.listen(PORT);
}

module.exports = {
  server,
};
