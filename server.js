// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var http = require("http");

// Require Schemas
var Preferences = require("./server/model");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB Configuration configuration
mongoose.connect("localhost://funfacts" || "mongodb://heroku_0j7dknlc:38p3r307cqfd648rm62ufg5qsi@ds157624.mlab.com:57624/heroku_0j7dknlc");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------
// calling our NumbersAPI.
app.get("/api/numFacts", function(req, response){

  // helper function getRandomInt to find a random integer, set to rand, which we will use for the api call. In future developments this could be a user-inputted field.
  function getRandomInt(min, max) {
  let rand = Math.floor(Math.random() * (max - min)) + min;
  return rand;
  }

  let rand = getRandomInt(2, 500);

  const factUrl = "http://numbersapi.com/" + "" + rand + "" + "/" + "trivia";
    http.get(factUrl, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        console.log("this is a fact: " + body);
        response.send(body);
      });
  });
});

app.post("/api/facts", function(req, res){
  const newFacts = new Facts(req.body);

  console.log(req.body);

  newFacts.save(function(err, doc){
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Route to get all saved preferences
app.get("/api/saved", function(req, res) {

  Preferences.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

// Route to add a preference to saved list
app.post("/api/saved", function(req, res) {
  const newPreferences = new Preferences(req.body);

  console.log(req.body);

  newPreferences.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Route to delete a preference from saved list
app.delete("/api/saved/", function(req, res) {

  var url = req.param("url");

  Preferences.find({ url: url }).remove().exec(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});

// Any non API GET routes will be directed to our React App and handled by React Router
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// -------------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
