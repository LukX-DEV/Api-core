const express = require("express"),
  router = express.Router();
  const path = require(`path`)

  router.get("/", async (req, res) => {
    const options = { 
      root: path.join(__dirname, `../website`)
    }
  res.sendFile(`api.html`, options)
  });


  router.get(`/8ball/:question`,  (req, res) => {

    const answers = [
      'It is certain.',
      'It is decidedly so.',
      'Without a doubt.',
      'Yes - definitely.',
      'You may rely on it.',
      'As I see it, yes.',
      'Most likely.',
      'Outlook good.',
      'Yes.',
      'Signs point to yes.',
      'Reply hazy, try again.',
      'Ask again later.',
      'Better not tell you now.',
      'Cannot predict now.',
      'Concentrate and ask again.',
      'Don\'t count on it.',
      'My reply is no.',
      'My sources say no.',
      'Outlook not so good.',
      'Very doubtful.'
    ];

  const { question } = req.params;
  if(!question) {
    res.status(418).json({
      error: "No question"
    })
  }
  const generate = answers[Math.floor(Math.random() * answers.length)];
    res.status(200).json({
      question: `${question}`,
      answer: `${generate}`
    })

})

module.exports = router ;