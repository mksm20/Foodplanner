async function server(inputData, dataForSearch) {
  const express = require('express');
  const cors = require('cors');
  const socket = require('socket.io');
  const calc = require('../calculations/calculator');
  const api = require('../node-api-call/api');
  const htmlConstructor = require('../calculations/createHtml');
  const htmlMealConstructor = require('../calculations/createHtmlMeal');
  const createArrayIngredient = require('../calculations/createObjectArray');
  const route = require('../routing/routing');

  const app = express();
  app.use(cors());
  app.use(express.static('./Public'));

  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.use(express.json());

  const PORT = process.env.PORT || 3000;
  let info, html, html2, meal;

  const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
  const io = socket(server);

  io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('meal', async (data) => {
      console.log(data.message);
      inputData = data.message;
      console.log(inputData);
      dataForSearch = calc.calculator(inputData);
      info = await api.callMealDB(dataForSearch);
      info = createArrayIngredient(await info);
      data.message = htmlConstructor.createHtmlLayout(await info);
      await { result: data.message };
      console.log(data.message);
      io.sockets.emit('meal', data);
    });
  });

  app.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
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
    } else {
      res.send(404);
    }
  });

  app.get('/misa', async (req, res) => {
    let html = await htmlMealConstructor(info);
    await { result: html };
    res.send(html);
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
