import React, { Component } from 'react';
import firebase from 'firebase'
import fire from '../fire';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ''
    };
  }
  signUpWithEmail(e) {
    e.preventDefault();
    if(this.signUpPassword === this.verifyPassword) {
      fire.auth().createUserWithEmailAndPassword(this.signUpEmail.value, this.signUpPassword.value).then(() => {
        // new user created & logged in, redirect to their account page
        window.location = '/account';
      }).catch((error) => {
        this.setState({ errorMessage: error.message });
        console.log(error);
      });
    } else {
      this.setState({ errorMessage: 'Passwords do not match' });
    }
  }
  logInWithEmail(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.logInEmail.value, this.logInPassword.value).then(() => {
      // user logged in, redirect to their account page
      window.location = '/account';
    }).catch((error) => {
      this.setState({ errorMessage: error.message });
      console.log(error);
    });
  }
  logInWithGoogle(e) {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    fire.auth().signInWithPopup(provider).then((result) => {
      console.log('Signed in with Google.');
    }).catch(function (error) {
      this.setState({ errorMessage: error.message });
      console.log(error);
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.errorMessage}</p>
        <form onSubmit={this.signUpWithEmail.bind(this)}>
          <h3>Sign up</h3>
          <p>Sign up with your email and password.</p>
          <input type="text" placeholder="Email" ref={txtSignUpEmail => this.signUpEmail = txtSignUpEmail} />
          <input type="password" placeholder="Password" ref={txtSignUpPassword => this.signUpPassword = txtSignUpPassword} />
          <input type="password" placeholder="Verify Password" ref={txtVerifyPassword => this.verifyPassword = txtVerifyPassword} />
          <input type="submit" value="sign up" />
        </form>
        <form onSubmit={this.logInWithEmail.bind(this)}>
          <h3>Log in</h3>
          <p>Log in with your email and password.</p>
          <input type="text" placeholder="Email" ref={txtLogInEmail => this.logInEmail = txtLogInEmail} />
          <input type="password" placeholder="Password" ref={txtLogInPassword => this.logInPassword = txtLogInPassword} />
          <input type="submit" value="log in" />
        </form>
        <form onSubmit={this.logInWithGoogle.bind(this)}>
          <h3>Google</h3>
          <p>Log in / sign up with your Google account.</p>
          <input type="submit" value="log in with google" />
        </form>
      </div>
    );
  }
}
export default LoginPage;
