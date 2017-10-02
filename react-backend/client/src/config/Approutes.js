import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router';
import Login from '../components/Login';
import Landing from '../components/Landing';

export default class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Landing} />
        <Route path="/login" component={Login} />
      </Router>
    )
  }
}
