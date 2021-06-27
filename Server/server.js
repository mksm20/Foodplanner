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
      let info = createArrayIngredient(await api.callMealDB(dataForSearch));
      let html = htmlConstructor.createHtmlLayout(await info);
      data.message = html;
      await { result: data.message };
      socket.emit('meal', data);
    });
    socket.on('mealFood', async (data) => {
      console.log(data.message);
      let meal = data.message;
      console.log(meal);
      let dataForSearch = route.searchParam('Dish', meal);
      let info = await api.callMealDB(dataForSearch);
      data.message = await htmlMealConstructor(info);
      await { result: data.message };
      socket.emit('mealFood', data);
    });
  });
}
module.exports = {
  server,
};
