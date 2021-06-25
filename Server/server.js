async function server(inputData, dataForSearch) {
  const express = require('express');
  const bodyParser = require('body-parser');
  const router = express.Router();
  const cors = require('cors');
  const calc = require('../calculations/calculator');
  const api = require('../node-api-call/api');
  const htmlConstructor = require('../calculations/createHtml');
  const htmlMealConstructor = require('../calculations/createHtmlMeal');
  const createArrayIngredient = require('../calculations/createObjectArray');
  const route = require('../routing/routing');

  const app = express();
  let info, html, meal;

  app.use(cors());
  app.use(express.static('./Public'));
  const PORT = process.env.PORT || 3000;
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());
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
    res.send(html);
  });

  app.post('/meal', async (req, res) => {
    if (req) {
      meal = req.body;
      console.log(meal.meal);
      dataForSearch = route.searchParam('Dish', meal.meal);
      info = await api.callMealDB(dataForSearch);
      html = htmlMealConstructor(await info);
    } else {
      res.send(404);
    }
  });

  app.get('/misa', (req, res) => {
    res.sendFile(
      'C:/Users/martin mortensen/Desktop/Programming/myprojects/FoodPlanner/Public/file.html'
    );
  });

  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}

module.exports = {
  server,
};
/* .then(
    app.get('/meal', async (req, res) => {
      res.send(html);
    })
  ); */
