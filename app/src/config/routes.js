// Include the React library
import React from "react";

// Include the react-router module
import {Router, Route, browserHistory, IndexRoute} from "react-router";

// Reference the high-level components
import Landing from "Landing";
import Login from "Login";
import Main from "Main";

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
