//Dynamically create html with data from api call
function createHtmlLayout(objectArray) {
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
      <div class="container"> <div class="centered"><h1>The Meal Planner</h1></div></div>`;

  for (let i = 0; i < objectArray.length; i++) {
    html += `<div class="container">
  <img src="${objectArray[i].image}" dish${i + 1} style="width:50%  id="a";">
  <div > <button type="button" style="font-size:2vw" class="meals" id="meal${i}" value="${
      objectArray[i].meal
    }">${objectArray[i].meal}</button><br></div>
  <div >  
    <form action="/misa" method="GET">
      <fieldset>
        <input type="submit" value="submit" />
      </fieldset>
    </form>
  </div>
  </div>\n`;
  }
  html += `<div class="container"><div class="centered"><a class ="centered" href="#" onclick="history.go(-1)">Go Back</a></div></div>
  <script>async function getNewResource(url, data) {
      console.log(data);
      fetch(url, {method: "POST", redirect: "follow", body:data, headers: {"Content-type": "application/json; charset=UTF-8"}})
      .catch(function(err) {
        console.info(err + " url: " + url);
    });
      }
  </script>
  <script>onload;
  let elements = document.getElementsByClassName('meals');
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', () => {
      let x = '{"meal":"';
      x += document.getElementById("meal"+i).value;
      x += '"}'
      console.log(x);
      getNewResource('/meal', x);
    })
  };</script>
  </body> </html>`;

  return html;
}

module.exports = { createHtmlLayout };

/* async function getNewResource(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'text-html',
    },
  });
  return response; */
/* } */

/* document.getElementById('meal').addEventListener('click', () => {
  var x = document.getElementById('meal').value;
});
 */
/* let elements = document.getElementsByClassName('meals');
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', () => {
    let x = '{"meal":"';
    x += document.getElementById('meal' + i).value;
    x += '"}';
    console.log(x);
    getNewResource('/meal', x);
  });
} */
