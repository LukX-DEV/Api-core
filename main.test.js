const fetch = require('node-fetch')

fetch("http://localhost:4500/api/flags")
  .then(async (response) => {
    console.log(await response.json())
    
  })
  .catch(function (err) {
    console.log("Unable to fetch -", err);
  });