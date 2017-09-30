// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

var browserHistory = router.browserHistory;

// Include the Router component
var Router = router.Router;

// Reference the high-level components
var Landing = require("../components/Landing");
var Login = require("../components/Login");
var Main = require("../components/Main");

// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Landing}>

      <Route path="Login" component={Login} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Landing} />

    </Route>
  </Router>
);
