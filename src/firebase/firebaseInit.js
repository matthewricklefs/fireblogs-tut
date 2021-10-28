import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2KJUx-fbYLDhsC93ny8Lm3Qxh2bSzeEs",
  authDomain: "fireblogs-tut-d3eb2.firebaseapp.com",
  projectId: "fireblogs-tut-d3eb2",
  storageBucket: "fireblogs-tut-d3eb2.appspot.com",
  messagingSenderId: "576243968491",
  appId: "1:576243968491:web:131bd63cf3447913ff11ae",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
