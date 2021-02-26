import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4mcoAs_LrHu145PFnyfqQw3E2VxxWG_0",
  authDomain: "facebook-project-c7847.firebaseapp.com",
  projectId: "facebook-project-c7847",
  storageBucket: "facebook-project-c7847.appspot.com",
  messagingSenderId: "416834278493",
  appId: "1:416834278493:web:20f7798a2cf7b46d16e9b4",
  measurementId: "G-0YJR4WWL3T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
