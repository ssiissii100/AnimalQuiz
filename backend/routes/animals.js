const express = require("express");
const animalRoutes = express.Router();
const dbo = require("../config/db");
require('dotenv').config();

animalRoutes.route("/speed").get(function (req, res) {
  let db_connect = dbo.getDb("animalquiz");
  db_connect
    .collection("animals")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
 
 
module.exports = animalRoutes;