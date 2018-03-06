import React, { Component } from 'react';
import fire, { db } from '../../fire';

class Auth extends Component {
  constructor(props) {
        super(props);
        this.state = {
            auth: true
        };
    }
  componentWillMount() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.setState({
          auth: true
        });
      } else {
        // No user is signed in.
        this.setState({
          auth: false
        });
      }
    });
  }
  render() {
    return (
      <div>
        {
          !this.state.auth && (
            <div>
              Please <a href="/login">LOG IN</a> or <a href="">continue</a> anonymously. 
            </div>
          )
        }
      </div>
    );
  }
}
export default Auth;
