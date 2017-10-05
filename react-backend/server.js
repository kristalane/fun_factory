// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

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
mongoose.connect("mongodb://localhost/funfacts");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// "mongodb://heroku_0j7dknlc:38p3r307cqfd648rm62ufg5qsi@ds157624.mlab.com:57624/heroku_0j7dknlc"
// -------------------------------------------------

// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/app/public/index.html");
});

/* GET home page. */
app.get('/', function(req, res, next) {
  res.send('/app/public/index.html');
});

app.get('/main/:id', function(req, res, next) {
  res.json(Preferences.findAll())
});

app.put("/main/:id", function(req, res) {
  var Preferences = new Preferences (req.body);
  Preferences.save(function(error, doc) {
    if (error) {
      console.log(error);
    }
    else {
      Preferences.findOneAndUpdate({ "_id": req.params.id})
      .exec(function(err,doc) {
        if(err) {
          console.log(err)
        }
        else {
          res.send(doc)
        }
      });
    }
  });
})


// -------------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
