// Include the React library
import React from "react";

// Include the Route component
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute,
} from 'react-router-dom';

// Reference the high-level components
import Landing from "../components/Landing";
import Main from "../components/Main";
import Saved  from "../components/Saved";


// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={Router}>
    <Route path="/" component={Landing}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="Main" component={Main} />
      <Route path="Saved" component={Saved} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Landing} />

    </Route>
  </Router>
);
