function calculator(inputData) {
  const route = require('../routing/routing');
  let searchParam = inputData.food;
  let searchTerm;
  searchTerm = route.searchParam('Ingredient', searchParam);
  return searchTerm;
}
module.exports = { calculator };
