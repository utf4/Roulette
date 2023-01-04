require('dotenv').config()
const http = require("http");
const express = require('express')
const app = express()
const cors = require("cors");
const bodyParser = require("body-parser");

app.get('/', function (req, res) {
  res.send('Hello World')
})

// app.options("*", cors({ origin: 'http://localhost:8080', optionsSuccessStatus: 200 }));

app.use(cors());
app.use(bodyParser.json({ type: 'application/*+json' }))

app.post('/spin', function (req, res) {
  const newPrizeNumber = Math.floor(Math.random() * 9);
  res.send({number : newPrizeNumber})
})

// starting the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://${process.env.HOST}:${process.env.PORT}`);
});
