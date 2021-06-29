class Meal {
  constructor(ing, amn) {
    this.ing = ing;
    this.amn = removeTextNumToInt(amn);
  }
}
function removeTextNumToInt(data) {
  data = data.replace(/D/g, '');
  data = parseFloat(data);
  return data;
}
module.exports = Meal;
