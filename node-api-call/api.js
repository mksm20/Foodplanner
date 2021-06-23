function callMealDB(searchParam) {
  const request = require('request');

  const options = {
    url: 'http://www.themealdb.com/api/json/v1/1/' + searchParam,
    headers: { Authorization: 'token=1' }, // Demo API KEY
  };

  request.get(options, function (error, response, body) {
    const info = JSON.parse(body);
    console.log(info);
  });
}

module.exports = { callMealDB };
