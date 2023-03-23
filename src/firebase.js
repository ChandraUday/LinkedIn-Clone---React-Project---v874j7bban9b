import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyACbb7QzE6sfvgFNlMHCg0hcozHl3Za3TM",
    authDomain: "linkedin-clone1-3f5a6.firebaseapp.com",
    projectId: "linkedin-clone1-3f5a6",
    storageBucket: "linkedin-clone1-3f5a6.appspot.com",
    messagingSenderId: "679459573344",
    appId: "1:679459573344:web:702375a58aa09024523d05"
  };

//this special line of code connects everything
const firebaseApp=firebase.initializeApp(firebaseConfig);

//gets firestore database
const db=firebaseApp.firestore();

//we want to use firebase authentication
const auth = firebase.auth();

export { db,auth }