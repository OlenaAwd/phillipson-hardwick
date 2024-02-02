const { ObjectID } = require("bson");
const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route("/clients").get(function (req, res) {
    let db_connect = dbo.getDb("clients");
    db_connect
      .collection("clients")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      })
        
})

// This section will help you get a single record by id
recordRoutes.route("/client/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectID(req.params.id) };
    db_connect.collection("clients")
        .findOne(myquery, function (err, result) {
        if (err) throw err; 
        res.json(result)
    })

})

// This section will help you create a new record.
recordRoutes.route("/client/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    console.log(req.params)
    let myobj = req.body;
    db_connect.collection("clients").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
 });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: req.body,
 };
 db_connect
   .collection("clients")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("clients").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});

module.exports = recordRoutes;