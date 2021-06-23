function server() {
  const express = require('express');
  const app = express();
  app.use(express.static('./Public'));
  const PORT = process.env.PORT || 3000;
  let x;
  app.get('/', (req, res) => {
    res.send(index.html);
  });

  app.post('/submit', (req, res) => {
    x = JSON.stringify(req.body);
    console.log(x);
  });

  app.listen(PORT);
}

module.exports = {
  server,
};
