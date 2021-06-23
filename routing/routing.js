function searchParam(input) {
  switch (input) {
    case searchhByLetter:
      return 'search.php?f=';
    case searchhByIngredient:
      return 'filter.php?i=';
    case searchhByCategory:
      return 'filter.php?c=';
    default:
      break;
  }
}

module.exports = { searchParam };
