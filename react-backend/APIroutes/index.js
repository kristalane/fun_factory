var express = require('express');
var router = express.Router();
var Preferences = require('../server/model.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('./client/public/index.html');
});

router.get('/main/:id', function(req, res, next) {
  res.json(Preferences.findAll())

});

router.put("/main/:id", function(req, res) {
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
// Create a new comment or replace an existing comment
router.post("/articles/:id", function(req, res) {
  var newComment = new Comment(req.body);
  newComment.save(function(error, doc) {
    if (error) {
      console.log(error);
    }
    else {
      // Use the article id to find and update its comment
      Article.findOneAndUpdate({ "_id": req.params.id }, { "comment": doc._id })
      .exec(function(err, doc) {
        if (err) {
          console.log(err);
        }
        else {
          res.send(doc);
        }
      });
    }
  });
});




module.exports = router;
