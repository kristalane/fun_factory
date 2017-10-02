import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from './components/navbar';
import AutoCarousel from './components/carousel';
import GoogleLogin from 'react-google-login';
import responseGoogle from './login';

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
    <AppBarExampleIcon />
    <AutoCarousel />
    <GoogleLogin />
  </MuiThemeProvider>
);

export default Mui;
