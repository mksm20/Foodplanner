function createHtmlLayout(objectArray) {
  let html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Meal Planner</title>
      </head>
      <body>
        <h1>The Meal Planner</h1>`;

  for (let i = 0; i < objectArray.length; i++) {
    html += `<div class="container">
  <img src="${objectArray[i].image}" dish${i + 1} style="width:80%;">
  <div class="centered">${objectArray[i].meal}</div>
  </div>\n`;
  }
  html += `</body> </html>`;
  return html;
}

module.exports = { createHtmlLayout };
