import React, { Component } from 'react';
import firebase from 'firebase'

import fire from '../fire';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentWillMount() {

  }
  logInWithGoogle(e) {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    fire.auth().signInWithPopup(provider).then(function (result) {
      console.log('Signed in with Google.');
    }).catch(function (error) {
      // An error with sign-in happened
      console.log('Error with sign-in.');
      console.log(error);
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.logInWithGoogle.bind(this)}>
          <input type="submit" value="log in with google" />
        </form>
      </div>
    );
  }
}

export default LoginPage;
