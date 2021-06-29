function calculator(inputData) {
  const route = require('../routing/routing');
  let searchParam = inputData;
  let searchTerm = route.searchParam('Ingredient', searchParam);
  return searchTerm;
}

function calculateIngredients(mealObj) {
  const Meal = require('../classes/mealClass');
  let ingAmnArr = [];
  for (let i = 1; i <= 20; i++) {
    if (mealObj[`ing${i}`] !== '') {
      ingAmnArr[i - 1] = new Meal(mealObj[`ing${i}`], mealObj[`amn${i}`]);
    }
  }
  console.log(ingAmnArr);
}
module.exports = { calculator, calculateIngredients };
