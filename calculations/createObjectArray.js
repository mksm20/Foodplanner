function createObjectArray(data) {
  const classIngredient = require('../classes/ingredientSearch');
  let arrayOfIngredients = [];
  console.log(data);
  console.log('her' + data.meals.length);
  for (let i = 0; i < data.meals.length; i++) {
    arrayOfIngredients[i] = new classIngredient(data.meals[i]);
    console.log(i);
  }
  return arrayOfIngredients;
}

module.exports = createObjectArray;
