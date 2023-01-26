const express = require("express");
const animalRoutes = express.Router();
const dbo = require("../config/db");
require('dotenv').config();

animalRoutes.route("/speed").get(function (req, res) {
  let db_connect = dbo.getDb("animalquiz");
  db_connect
    .collection("animals")
    .find({},{ projection: { name: 1, speed: 1  }}) 
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

animalRoutes.route("/speed").get(function (req, res) {
  let db_connect = dbo.getDb("animalquiz");
  db_connect
    .collection("animals")
    .find({},{ projection: { name: 1, speed: 1  }}) 
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

animalRoutes.route("/").get(function (req, res) {
  let db_connect = dbo.getDb("animalquiz");
  db_connect
    .collection("animals")
    .find({}) 
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

animalRoutes.route("/speed").get(function (req, res) {
  let db_connect = dbo.getDb("animalquiz");
  db_connect
    .collection("animals")
    .find({},{ projection: { name: 1, speed: 1  }}) 
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

animalRoutes.route("/weight").get(function (req, res) {
  let db_connect = dbo.getDb("animalquiz");
  db_connect
    .collection("animals")
    .find({},{ projection: { name: 1, weight: 1  }}) 
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

animalRoutes.route("/length").get(function (req, res) {
  let db_connect = dbo.getDb("animalquiz");
  db_connect
    .collection("animals")
    .find({},{ projection: { name: 1, length: 1  }}) 
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
animalRoutes.route("/height").get(function (req, res) {
  let db_connect = dbo.getDb("animalquiz");
  db_connect
    .collection("animals")
    .find({},{ projection: { name: 1, height: 1  }}) 
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

animalRoutes.route("/lifespan").get(function (req, res) {
  let db_connect = dbo.getDb("animalquiz");
  db_connect
    .collection("animals")
    .find({},{ projection: { name: 1, lifespan: 1  }}) 
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
 
module.exports = animalRoutes;