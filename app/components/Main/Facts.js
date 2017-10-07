var React = require("react");

// Include the helpers for making API calls
var helpers = require("../../utils/helpers");

// Create the Search component
var Facts = React.createClass({

  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "resuls" state. This will be where we hold the data from our results
  getInitialState: function() {
    return {
      results: {}
    };
  },

  render: function() {

    return (
      <div className="main-container">
          <p>Hey, I'm a fact component that would totally work if I added my API results here. For now, you'll have to visit /api/numFacts</p>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Facts;
