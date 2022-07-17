# Pixel-Labs-Api
Pixel Labs Api is powerful api to create amazing things.
This api is created in javascript using express.js and handlebars (hbs)

## How to use api?
Examples of usage in diffrent languages.

### Javascript using [node-fetch](https://www.npmjs.com/package/node-fetch)

```
$ npm install node-fetch@2
```
```js
const fetch = require('node-fetch')

fetch("http://localhost:4500/api/flags")
  .then(async (response) => {
    console.log(await response.json())
  })
  .catch(function (err) {
    console.log("Unable to fetch -", err);
  });
```