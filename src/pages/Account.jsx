import React, { Component } from 'react';
import firebase from 'firebase'

import fire from '../fire';

class AccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentWillMount() {

  }
  signOut(e) {
    e.preventDefault();
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.signOut.bind(this)}>
          <input type="submit" value="log out" />
        </form>
      </div>
    );
  }
}

export default AccountPage;
