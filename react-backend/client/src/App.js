import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from './components/navbar';
import AutoCarousel from './components/carousel';
import Login from './login';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

const Mui = () => (
  <MuiThemeProvider>
    {/* <AppBarExampleIcon /> */}
    <AutoCarousel />
    {/* <Login /> */}
  </MuiThemeProvider>
);

export default Mui;


// from jayson's sample folder
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import AppRoutes from './config/AppRoutes'
//
// class App extends Component {
//   render() {
//     return (
//       <AppRoutes />
//     );
//   }
// }
//
// export default App;
