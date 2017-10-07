// var React = require("react");
// var helpers = require("../utils/helpers");
//
// const Landing = React.createClass({
//
//   getInitialState: function() {
//     return {
//       results: {}
//     };
//   },
//   // This function will be passed down into child components so they can change the "parent"
//   // i.e we will pass this method to the query component that way it can change the main component
//   // to perform a new search
//   setQuery: function(newQuery, newStart, newEnd) {
//     helpers.runQuery(newQuery, newStart, newEnd).then(function(data) {
//       this.setState({ results: { docs: data.docs } });
//     }.bind(this));
//   },
//
//
//   // Render the component. Note how we deploy both the Query and the Results Components
//   render: function() {
//     console.log("Render Results", this.state.results);
//     return (
//       <div className="main-container">
//         {/* Note how we pass the setQuery function to enable Query to perform searches */}
//         <Query updateSearch={this.setQuery} />
//         {/* Note how we pass in the results into this component */}
//         <Results results={this.state.results} />
//       </div>
//     );
//   }
// });
//
// // Export the module back to the route
// module.exports = Landing;
//
//
// // React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object. Check the render method of `Landing`.
