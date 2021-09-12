import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJ5L378yDhffkht76y7NJ63IaeAmgcRgg",
  authDomain: "fireblogs-tut.firebaseapp.com",
  projectId: "fireblogs-tut",
  storageBucket: "fireblogs-tut.appspot.com",
  messagingSenderId: "387072541726",
  appId: "1:387072541726:web:be0289eccb1e549a881a0f",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
