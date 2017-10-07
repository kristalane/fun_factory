
// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;
var helpers = require("../utils/helpers");
// Create the Main component
var Main = React.createClass({
  render: function() {
    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
      <div className="main-container">
        <div className="container">
          {/* Navbar */}
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
          {/* Here we will deploy the sub components (Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
          {this.props.children}
          <footer>
            <hr />
            <p className="pull-right">
              <i className="fa fa-github" aria-hidden="true"></i>
              Proudly built using React.js
            </p>
          </footer>
        </div>
      </div>
    );
  }
});
// Export the module back to the route
module.exports = Main;
