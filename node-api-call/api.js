async function callMealDB(searchParam) {
  const request = require('request');
  const options = {
    url: `http://www.themealdb.com/api/json/v1/1/${searchParam}`,
    headers: { Authorization: 'token=1' }, // Demo API KEY
  };
  return new Promise(function (resolve, reject) {
    request.get(options, function (error, response, body) {
      if (error) {
        console.log(error);
      }
      resolve(JSON.parse(body));
    });
  });
}

module.exports = { callMealDB };
