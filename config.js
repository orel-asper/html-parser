'use strict';
(async () => {
  const { extract } = require('./articleParser/index')
  const bodyParser = require('body-parser');
  const express = require('express')
  const cors = require('cors')
  const path = require('path')


  // const url = 'https://www.ynet.co.il/news/article/bkxggtjtt#autoplay'

  const app = express()
  const port = 3000
  app.use(cors())
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, 'build')));


  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });

  app.get('/:url', (req, res) => {
    let url = req.params.url
    extract(url).then((article) => {
      if (article == null) res.status(500).send('Error: no data found')
      res.send(article)
    }).catch((err) => {
      res.send(err)
    })
  })

  const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

  module.exports = app;
})()

