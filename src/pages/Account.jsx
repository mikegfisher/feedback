import React, { Component } from 'react';
import firebase from 'firebase'
import fire from '../fire';
import LoginPrompt from '../components/LoginPrompt/LoginPrompt';

class AccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  signOut(e) {
    e.preventDefault();
    firebase.auth().signOut().then(() => {
      // successfully logged out, redirect to login page
      window.location = '/login';
    }).catch((error) => {});
  }
  render() {
    return (
      <div>
        <LoginPrompt user={this.props.user} />
        <form onSubmit={this.signOut.bind(this)}>
          <input type="submit" value="log out" />
        </form>
      </div>
    );
  }
}
export default AccountPage;
