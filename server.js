
//first we import our dependencies…
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var logger = require("morgan");

var PreferencesSchema = require("./server/model");

//and create our instances
var app = express();

//set our port to either a predetermined port number, or 3001
var port = process.env.API_PORT || 3001;

//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader("Access-Control-Allow-Credentials", "true");
 res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
 res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//and remove cacheing so we get the most recent comments
 res.setHeader("Cache-Control", "no-cache");
 next();
});


// MongoDB Configuration configuration
mongoose.connect("MONGODB_URI: mongodb://heroku_0j7dknlc:38p3r307cqfd648rm62ufg5qsi@ds157624.mlab.com:57624/heroku_0j7dknlc");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// //now we can set the route path & initialize the API
// app.get("/", function(req, res) {
//  res.json({ message: "API Initialized!"});
// });
//
app.listen(port, function() {
 console.log("api running on port " + port);
});

// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
