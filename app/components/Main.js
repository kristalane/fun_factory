
// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;
var helpers = require("../utils/helpers");
var Facts = require("./Main/Facts");
var Results = require("./Main/Results");

// Create the Main component
var Main = React.createClass({
  getInitialState: function() {
    return {
      facts: {}
    };
  },
  // This function will be passed down into child components so they can change the "parent"
  // i.e we will pass this method to the query component that way it can change the main component
  // to perform a new search
  setQuery: function() {
    helpers.runQuery().then(function(data) {
      this.setState({ facts: { docs: data.docs } });
    }.bind(this));
  },


  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {
    console.log("Render Facts", this.state.facts);
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Fun FACTory</Link>
            </div>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
            </div>
          </div>
        </nav>
        {/* Jumbotron */}
        <div className="jumbotron">
          <h2 className="text-center"><strong>(ReactJS) Fun Fact Shop</strong></h2>
          <h3 className="text-center">Search for and save fun facts of interest.</h3>
        </div>

        {/* Note how we pass the runQuery function to enable Facts to perform searches */}
        <Facts updateSearch={this.facts} />
        <Results update={this.results} />
        <footer>
          <hr />
          <p className="pull-right">
            <i className="fa fa-github" aria-hidden="true"></i>
            Proudly built using React.js
          </p>
        </footer>

      </div>
      );
    }
  });

// Export the module back to the route
module.exports = Main;
