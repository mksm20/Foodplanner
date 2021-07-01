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
    if (mealObj[`ing${i}`] !== '' && mealObj[`ing${i}`] !== null) {
      ingAmnArr[i - 1] = new Meal(mealObj[`ing${i}`], mealObj[`amn${i}`]);
    }
  }
  console.log(ingAmnArr);
  return ingAmnArr;
}

function addIngList(ingAmnArrIn, ingAmnArrOut = []) {
  let found = false;
  for (let i = 0; i < ingAmnArrIn.length; i++) {
    for (let k = 0; k < ingAmnArrOut.length; k++) {
      if (ingAmnArrIn[i].ing === ingAmnArrOut[k].ing) {
        ingAmnArrOut[k].amn += ingAmnArrIn[i].amn;
        found = true;
      }
    }
    if (found === false) {
      ingAmnArrOut.push(ingAmnArrIn[i]);
    }
    found = false;
  }
  return ingAmnArrOut;
}
module.exports = { calculator, calculateIngredients, addIngList };
