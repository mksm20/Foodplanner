async function createMealHtml(dataObject) {
  await dataObject;
  let html = `
      <body>
      <div class="container"> <div class="centered"><h1>The Meal Planner</h1></div>
      <style>
      div {text-align: left;}
      </style> ${dataObject.meals[0].strMeal} <br>
      ${dataObject.meals[0].strArea} <br>
      ${dataObject.meals[0].strInstructions} <br>
      <img src="${dataObject.meals[0].strMealThumb}" dish${dataObject.meals[0].strMeal} style="width:50%  id="a";"><br>
      <a href=${dataObject.meals[0].strYoutube}>Youtube<a> <br>
      Ingredients: <br>
      ${dataObject.meals[0].strIngredient1} : ${dataObject.meals[0].strMeasure1}  <br>
      ${dataObject.meals[0].strIngredient2} : ${dataObject.meals[0].strMeasure2}<br>
      ${dataObject.meals[0].strIngredient3} : ${dataObject.meals[0].strMeasure3}<br>
      ${dataObject.meals[0].strIngredient4} : ${dataObject.meals[0].strMeasure4}<br>
      ${dataObject.meals[0].strIngredient5} : ${dataObject.meals[0].strMeasure5}<br>
      ${dataObject.meals[0].strIngredient6} : ${dataObject.meals[0].strMeasure6}<br>
      ${dataObject.meals[0].strIngredient7} : ${dataObject.meals[0].strMeasure7}<br>
      ${dataObject.meals[0].strIngredient8} : ${dataObject.meals[0].strMeasure8}<br>
      ${dataObject.meals[0].strIngredient9} : ${dataObject.meals[0].strMeasure9}<br>
      ${dataObject.meals[0].strIngredient10} : ${dataObject.meals[0].strMeasure10}<br>
      ${dataObject.meals[0].strIngredient11} : ${dataObject.meals[0].strMeasure11}<br>
      ${dataObject.meals[0].strIngredient12} : ${dataObject.meals[0].strMeasure12}<br>
      ${dataObject.meals[0].strIngredient13} : ${dataObject.meals[0].strMeasure13}<br>
      ${dataObject.meals[0].strIngredient14} : ${dataObject.meals[0].strMeasure14}<br>
      ${dataObject.meals[0].strIngredient15} : ${dataObject.meals[0].strMeasure15}<br>
      ${dataObject.meals[0].strIngredient16} : ${dataObject.meals[0].strMeasure16}<br>
      ${dataObject.meals[0].strIngredient17} : ${dataObject.meals[0].strMeasure17}<br>
      ${dataObject.meals[0].strIngredient18} : ${dataObject.meals[0].strMeasure18}<br>
      ${dataObject.meals[0].strIngredient19} : ${dataObject.meals[0].strMeasure19}<br>
      ${dataObject.meals[0].strIngredient20} : ${dataObject.meals[0].strMeasure20}<br>
      <div class="container"><div class="centered"><a class ="centered" href="#" onclick="history.go(-1)">Go Back</a></div></div>
      </body>`;
  //console.log(html);
  //resolve(html);
  //});
  return html;
}

module.exports = createMealHtml;
