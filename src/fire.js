import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyBdX3_bO8hIGJyHyJywLsPzCnfR4r0Aebs",
  authDomain: "feedback-744d5.firebaseapp.com",
  databaseURL: "https://feedback-744d5.firebaseio.com",
  projectId: "feedback-744d5",
  storageBucket: "feedback-744d5.appspot.com",
  messagingSenderId: "354080782478"
  };
var fire = firebase.initializeApp(config);
export default fire;
