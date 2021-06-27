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
  <div > <button type="button" style="font-size:2vw" style="border: none" class="meals" id="meal${i}" value="${
      objectArray[i].meal
    }">${objectArray[i].meal}</button>
    <br></div>
  <div >  
    </form>
  </div>
 
  </div>\n`;
  }
  html += `<div class="container"><div class="centered"><div  class="btn btn-light"><a class ="centered" href="#" id="goBack">Go Back</a></div></div></div>
  `;

  return html;
}

module.exports = { createHtmlLayout };
