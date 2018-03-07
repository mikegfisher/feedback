import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import fire, { db } from '../fire';

/* import components */
import Navigation from './Navigation/Navigation';

/* import pages */
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import AccountPage from '../pages/Account';

/* import routes */
import * as routes from '../constants/routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentWillMount() {
    // check to see if the current user is logged in
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        // user is signed in, update the state
        this.setState({
          user: user
        });
      } else {
        // user is NOT signed in, update the state
        this.setState({
          user: {}
        });
      }
    });
  }
  render() {
    return (
      <div>
      <Router>
    <div>
      <Navigation user={this.state.user} />

      <hr/>
      <Route
        exact path={routes.HOME}
        component={() => <HomePage user={this.state.user} />}
      />
      <Route
        exact path={routes.LOGIN}
        component={() => <LoginPage user={this.state.user} />}
      />
      <Route
        exact path={routes.ACCOUNT}
        component={() => <AccountPage user={this.state.user} />}
      />
    </div>
  </Router>
      </div>
    );
  }
}
export default App;
