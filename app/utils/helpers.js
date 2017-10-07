// Include the Axios library for HTTP requests
var axios = require("axios");

// Helper Functions
var helpers = {

  // This will run our query.
  runQuery: function(term, start, end) {

    console.log("Query Run");
    // Run a query using Axios. Then return the results as an object with an array.
    // See the Axios documentation for details on how we structured this with the params.
    return axios.get("/api/numFacts")
    .then(function(results) {
      console.log("Axios Results", results.data.response);
      return results.data.response;
    });
  },

  // This will return any saved facts or preferences from our database
  getSaved: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
  // This will save new facts to our database
  postSaved: function(title, date, url) {
    var newFacts = { title: title, date: date, url: url };
    return axios.post("/api/saved", newArticle)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },
  // This will remove saved facts from our database
  deleteSaved: function(title, data, url) {
    return axios.delete("/api/saved", {
      params: {
        "title": title,
        "data": data,
        "url": url
      }
    })
    .then(function(results) {
      console.log("axios results", results);
      return results;
    });
  }
};


// We export the helpers function
module.exports = helpers;
