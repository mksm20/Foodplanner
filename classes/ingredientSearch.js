class ingredient {
  constructor(dishes) {
    this.meal = dishes.strMeal;
    this.image = dishes.strMealThumb;
    this.mealID = dishes.idMeal;
  }
}

module.exports = ingredient;
