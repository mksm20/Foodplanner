//Dynamically create html with data from api call
function createHtmlLayout(objectArray) {
  let html = `
      <style>
    div {text-align: center;}
    img {
      max-width:100%;
              height:auto;
  }
    </style>`;

  for (let i = 0; i < objectArray.length; i++) {
    html += `<div class="container">
  <img src="${objectArray[i].image}" dish${i + 1} style="width":50%  id="a";">
  <div > <button type="button" style="font-size:2vw" class="meals" id="meal${i}" value="${
      objectArray[i].meal
    }">${objectArray[i].meal}</button><br></div>
  <div >  
    <form action="/misa" method="GET" header>
      <fieldset>
        <input type="submit" value="submit" class="btn btn-light" />
      </fieldset>
    </form>
  </div>
  </div>\n`;
  }
  html += `<div class="container"><div class="centered"><div  class="btn btn-light"><a class ="centered" href="#" onclick="history.go(-1)">Go Back</a></div></div></div>`;

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
/* async function getNewResource(url, data) {
      console.log(data);
      fetch(url, {method: "POST", redirect: "follow", body:data, headers: {"Content-type": "application/json; charset=UTF-8"}}).then(fetch(url{method: "GET", redirect: "follow"}))
      .catch(function(err) {
        console.info(err + " url: " + url);
    });
      } */
