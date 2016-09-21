"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const express     = require("express");
const bodyParser  = require("body-parser");
const app         = express();
const chalk       = require('chalk');

const tweetsApi  = require('./api/tweets');
const db         = require('./lib/db');
// const methodOverride = require('method-override');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

db.connect((dbInstance) => {
  app.use('/tweets', tweetsApi(dbInstance));
});

app.listen(PORT, () => {
  console.log(chalk.red("Example app listening on port " + PORT));
});

// app.post('/', () => { });
