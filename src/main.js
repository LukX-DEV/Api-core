

const config = require("./config.js")
  const express = require("express"),
    app = express();
    const path = require(`path`)

  /* Routers */
  const mainRouter = require("./routes/index"),
    apIRouter = require("./routes/endpoints")

  app
    .use(express.json()) 
    .use(express.urlencoded({ extended: true }))
    .engine("html", require("ejs").renderFile) 
    .set("view engine", "ejs")
    .set("port", process.env.PORT) 
    .use("/api", apIRouter)
    .use(`/`, mainRouter)


  /* Start */
  app.listen(config.port, () => {
    console.log("API is listening on port " + config.port);
  });

  