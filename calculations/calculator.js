function calculator(inputData) {
  const route = require('../routing/routing');
  let searchParam = inputData;
  let searchTerm = route.searchParam('Ingredient', searchParam);
  return searchTerm;
}
module.exports = { calculator };
