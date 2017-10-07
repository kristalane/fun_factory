// Include the Axios library for HTTP requests
var axios = require("axios");

// Helper Functions
var helpers = {

  getFacts: function() {
    const factUrl = "http://numbersapi.com/" + "30/" + "trivia";
    return
      http.get(factUrl, res => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
          body += data;
        });
        res.on("end", () => {
          body = JSON.parse(body);
          console.log("this is a fact" + body);
      });
    });
  }

  // This will run our query.
  // runQuery: function(term, start, end) {
  //
  //   // Adjust to get search terms in proper format
  //   var formattedTerm = term.trim();
  //   var formattedStart = start.trim() + "0101";
  //   var formattedEnd = end.trim() + "1231";
  //
  //
  //   console.log("Query Run");
  //   // Run a query using Axios. Then return the results as an object with an array.
  //   // See the Axios documentation for details on how we structured this with the params.
  //   return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
  //     params: {
  //       "api-key": APIKey,
  //       "q": formattedTerm,
  //       "begin_date": formattedStart,
  //       "end_date": formattedEnd
  //     }
  //   })
  //   .then(function(results) {
  //     console.log("Axios Results", results.data.response);
  //     return results.data.response;
  //   });
  // },
  // This will return any saved articles from our database
  // getSaved: function() {
  //   return axios.get("/api/saved")
  //     .then(function(results) {
  //       console.log("axios results", results);
  //       return results;
  //     });
  // },
  // // This will save new articles to our database
  // postSaved: function(title, date, url) {
  //   var newArticle = { title: title, date: date, url: url };
  //   return axios.post("/api/saved", newArticle)
  //     .then(function(response) {
  //       console.log("axios results", response.data._id);
  //       return response.data._id;
  //     });
  // },
  // // This will remove saved articles from our database
  // deleteSaved: function(title, data, url) {
  //   return axios.delete("/api/saved", {
  //     params: {
  //       "title": title,
  //       "data": data,
  //       "url": url
  //     }
  //   })
  //   .then(function(results) {
  //     console.log("axios results", results);
  //     return results;
  //   });
  // }
};


// We export the helpers function
module.exports = helpers;
