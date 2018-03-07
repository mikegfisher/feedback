import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBdX3_bO8hIGJyHyJywLsPzCnfR4r0Aebs",
  authDomain: "feedback-744d5.firebaseapp.com",
  databaseURL: "https://feedback-744d5.firebaseio.com",
  projectId: "feedback-744d5",
  storageBucket: "feedback-744d5.appspot.com",
  messagingSenderId: "354080782478"
};
const fire = firebase.initializeApp(config);
const db = fire.firestore();
export default fire;
export { db };
