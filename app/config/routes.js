// Include the React library
var React = require("react");
// Include the react-router module
var router = require("react-router");
// Include the Route component
var Route = router.Route;
//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;
// Include the Router component
var Router = router.Router;
// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
var browserHistory = router.browserHistory;

// Reference the high-level components
// var Landing = require("../components/Landing");
var Main = require("../components/Main");
var Saved = require("../components/Saved");


// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Search or Saved show the appropriate component */}
      {/* <Route path="/Landing" component={Landing} /> */}
      <Route path="/Saved" component={Saved} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Main} />

    </Route>
  </Router>
);
