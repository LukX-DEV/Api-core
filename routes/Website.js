const express = require('express')
const router = express.Router()
const logger = require('../functions/Logger')
const path = require('path')


router.get("/", async (req, res) => {
    const options = { 
      root: path.join(__dirname, `../website`)
    }
  res.sendFile(`index.html`, options)
  });


logger.log("Website.js loaded.")

module.exports = router