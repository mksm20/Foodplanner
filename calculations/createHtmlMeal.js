async function createMealHtml(dataObject) {
  await dataObject;
  const fs = require('fs');
  let html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
    div {text-align: center;}
    </style>
    <title>Meal Planner</title>
      </head>
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
      ${dataObject.meals[0].strIngredient1} amount ${dataObject.meals[0].strMeasure1}  <br>
      ${dataObject.meals[0].strIngredient2} amount ${dataObject.meals[0].strMeasure2}<br>
      ${dataObject.meals[0].strIngredient3} amount ${dataObject.meals[0].strMeasure3}<br>
      ${dataObject.meals[0].strIngredient4} amount ${dataObject.meals[0].strMeasure4}<br>
      ${dataObject.meals[0].strIngredient5} amount ${dataObject.meals[0].strMeasure5}<br>
      ${dataObject.meals[0].strIngredient6} amount ${dataObject.meals[0].strMeasure6}<br>
      ${dataObject.meals[0].strIngredient7} amount ${dataObject.meals[0].strMeasure7}<br>
      ${dataObject.meals[0].strIngredient8} amount ${dataObject.meals[0].strMeasure8}<br>
      ${dataObject.meals[0].strIngredient9} amount ${dataObject.meals[0].strMeasure9}<br>
      ${dataObject.meals[0].strIngredient10} amount ${dataObject.meals[0].strMeasure10}<br>
      ${dataObject.meals[0].strIngredient11} amount ${dataObject.meals[0].strMeasure11}<br>
      ${dataObject.meals[0].strIngredient12} amount ${dataObject.meals[0].strMeasure12}<br>
      ${dataObject.meals[0].strIngredient13} amount ${dataObject.meals[0].strMeasure13}<br>
      ${dataObject.meals[0].strIngredient14} amount ${dataObject.meals[0].strMeasure14}<br>
      ${dataObject.meals[0].strIngredient15} amount ${dataObject.meals[0].strMeasure15}<br>
      ${dataObject.meals[0].strIngredient16} amount ${dataObject.meals[0].strMeasure16}<br>
      ${dataObject.meals[0].strIngredient17} amount ${dataObject.meals[0].strMeasure17}<br>
      ${dataObject.meals[0].strIngredient18} amount ${dataObject.meals[0].strMeasure18}<br>
      ${dataObject.meals[0].strIngredient19} amount ${dataObject.meals[0].strMeasure19}<br>
      ${dataObject.meals[0].strIngredient20} amount ${dataObject.meals[0].strMeasure20}<br>
      <div class="container"><div class="centered"><a class ="centered" href="#" onclick="history.go(-1)">Go Back</a></div></div>
      </body> </html>`;
  console.log(html);
  fs.writeFileSync('./Public/file.html', html);
  return html;
}

module.exports = createMealHtml;
