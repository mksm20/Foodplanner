function searchParam(type, input) {
  switch (type) {
    case 'Letter':
      return `search.php?f=${input}`;
    case 'Ingredient':
      return `filter.php?i=${input}`;
    case 'Category':
      return `filter.php?c=${input}`;
    default:
      break;
  }
}

module.exports = { searchParam };
