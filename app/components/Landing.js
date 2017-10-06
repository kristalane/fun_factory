// Include React as a dependency
import React from "react";

// Create the Search component
var Search = React.createClass({

  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "resuls" state. This will be where we hold the data from our results
  getInitialState: function() {
    return {
      results: {}
    };
  },

  // This function will be passed down into child components so they can change the "parent"
  // i.e we will pass this method to the query component that way it can change the main component
  // to perform a new search
  // setQuery: function(newQuery, newStart, newEnd) {
  //   helpers.runQuery(newQuery, newStart, newEnd).then(function(data) {
  //     this.setState({ results: { docs: data.docs } });
  //   }.bind(this));
  // },

  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {
    console.log("Render Results", this.state.results);

    return (
      <div className="main-container">
        <p>something showed up here!</p>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Search;
