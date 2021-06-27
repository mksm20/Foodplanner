async function createMealHtml(dataObject) {
  await dataObject;
  let html = `
  <div  class="btn btn-light"><a  href="#" id="addToList">Add Meal</a></div>
      <div id="recipe">
      <div class="container">
      <style>
      .container {
        padding: 50px;
        display: flex;
        justify-content: center;
      }
      </style>
      <div>
      <a id="mealID">${dataObject.meals[0].strMeal}</a> <br>
      <a id="area">${dataObject.meals[0].strArea}</a> <br>
      <a id="ins">${dataObject.meals[0].strInstructions}</a> <br>
      <img src="${dataObject.meals[0].strMealThumb}" dish${dataObject.meals[0].strMeal} style="width:50%  id="img";"><br>
      <a href=${dataObject.meals[0].strYoutube} id="yt">Youtube<a> <br>
      Ingredients: <br>
      <a id="ing1">${dataObject.meals[0].strIngredient1}</a> : <a id="amn1">${dataObject.meals[0].strMeasure1}</a><br>
      <a id="ing2">${dataObject.meals[0].strIngredient2}</a> : <a id="amn2">${dataObject.meals[0].strMeasure2}</a><br>
      <a id="ing3">${dataObject.meals[0].strIngredient3} </a>: <a id="amn3">${dataObject.meals[0].strMeasure3}</a><br>
      <a id="ing4">${dataObject.meals[0].strIngredient4}</a> : <a id="amn4">${dataObject.meals[0].strMeasure4}</a><br>
      <a id="ing5">${dataObject.meals[0].strIngredient5}</a> : <a id="amn5">${dataObject.meals[0].strMeasure5}</a><br>
      <a id="ing6">${dataObject.meals[0].strIngredient6}</a> : <a id="amn6">${dataObject.meals[0].strMeasure6}</a><br>
      <a id="ing7">${dataObject.meals[0].strIngredient7}</a> : <a id="amn7">${dataObject.meals[0].strMeasure7}</a><br>
      <a id="ing8">${dataObject.meals[0].strIngredient8}</a> : <a id="amn8">${dataObject.meals[0].strMeasure8}</a><br>
      <a id="ing9">${dataObject.meals[0].strIngredient9}</a> : <a id="amn9">${dataObject.meals[0].strMeasure9}</a><br>
      <a id="ing10">${dataObject.meals[0].strIngredient10}</a> : <a id="amn10">${dataObject.meals[0].strMeasure10}</a><br>
      <a id="ing11">${dataObject.meals[0].strIngredient11}</a> : <a id="amn11">${dataObject.meals[0].strMeasure11}</a><br>
      <a id="ing12">${dataObject.meals[0].strIngredient12}</a> : <a id="amn12">${dataObject.meals[0].strMeasure12}</a><br>
      <a id="ing13">${dataObject.meals[0].strIngredient13}</a> : <a id="amn13">${dataObject.meals[0].strMeasure13}</a><br>
      <a id="ing14">${dataObject.meals[0].strIngredient14}</a> : <a id="amn14">${dataObject.meals[0].strMeasure14}</a><br>
      <a id="ing15">${dataObject.meals[0].strIngredient15}</a> : <a id="amn15">${dataObject.meals[0].strMeasure15}</a><br>
      <a id="ing16">${dataObject.meals[0].strIngredient16}</a> : <a id="amn16">${dataObject.meals[0].strMeasure16}</a><br>
      <a id="ing17">${dataObject.meals[0].strIngredient17}</a> : <a id="amn17">${dataObject.meals[0].strMeasure17}</a><br>
      <a id="ing18">${dataObject.meals[0].strIngredient18}</a> : <a id="amn18">${dataObject.meals[0].strMeasure18}</a><br>
      <a id="ing19">${dataObject.meals[0].strIngredient19}</a> : <a id="amn19">${dataObject.meals[0].strMeasure19}</a><br>
      <a id="ing20">${dataObject.meals[0].strIngredient20}</a> : <a id="amn20">${dataObject.meals[0].strMeasure20}</a><br>
      </div>
      </div>
      <br><br>
      </div>
      <div class="centered">
      <a id="goBack">Go Back</a>
      </div>`;
  //console.log(html);
  //resolve(html);
  //});
  return html;
}

module.exports = createMealHtml;
