/* This is importing the express module, creating a router, importing the database connection, and
importing the dotenv module. */
const express = require("express");
const animalRoutes = express.Router();
const dbo = require("../config/db");
require('dotenv').config();

/* Getting the data from the database. */
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

animalRoutes.route("/user").get(function (req, res) {
  let db_connect = dbo.getDb("animalquiz");
  db_connect
    .collection("users")
    .find({}) 
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

/* Adding the data from the database. */
animalRoutes.route("/users").post(function (req, res) {
  let db_connect = dbo.getDb("animalquiz");
  db_connect.collection("users").insertOne(req.body, (err, result) => {
    if (err) throw err;
    res.json({ message: "user added successfully" });
  });
});

animalRoutes.route("/update/:id").post(function (req, res) {
  let db_connect = dbo.getDb("userquiz");
  let userId = req.params.id;
  let updatedUser = req.body;
  db_connect
    .collection("users")
    .updateOne({ _id: ObjectId(userId) }, { $set: updatedUser }, function (err, result) {
      if (err) throw err;
      res.json({ message: "User updated successfully!" });
    });
});


module.exports = animalRoutes;