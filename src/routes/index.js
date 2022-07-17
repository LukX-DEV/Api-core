const express = require("express"),
  router = express.Router();
  const path = require(`path`)

  router.get("/", async (req, res) => {
    const options = { 
      root: path.join(__dirname, `../website`)
    }
  res.sendFile(`index.html`, options)
  });

  module.exports = router ;