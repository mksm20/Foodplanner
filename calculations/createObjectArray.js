function createObjectArray(data) {
  const classIngredient = require('../classes/ingredientSearch');
  let arrayOfIngredients = [];
  for (let i = 0; i < data.meals.length; i++) {
    arrayOfIngredients[i] = new classIngredient(data.meals[i]);
  }
  return arrayOfIngredients;
}

module.exports = createObjectArray;
