async function server(inputData, dataForSearch) {
  const express = require('express');
  const cors = require('cors');
  const socket = require('socket.io');
  const calc = require('../calculations/calculator');
  const api = require('../node-api-call/api');
  const htmlConstructor = require('../calculations/createHtml');
  const htmlMealConstructor = require('../calculations/createHtmlMeal');
  const createArrayIngredient = require('../calculations/createObjectArray');
  const calculator = require('../calculations/calculator');
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
    let mealArr = [],
      i = 0,
      ingAmnArr = [];
    console.log(socket.id);
    //Recieves data from searchbar takes message and runs through
    //searchParam - which prepares the right param for the API call
    //Calls the api - and inserts return values in htmlConstructor and returns finished html
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
    //Recieves chosen meal from list - takes message and runs through
    //searchParam - which prepares the right param for the API call
    //Calls the api - and inserts return values in htmlMealConstructor and returns finished html
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
    socket.on('returnMeal', async (data) => {
      mealArr[i] = data.message;
      console.log(mealArr[i]);
      await { result: (mealArr[i] = data.message) };
      ingAmnArr[i] = calculator.calculateIngredients(mealArr[i]);
      i++;
    });
  });
}
module.exports = {
  server,
};
