import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCbN4tdP6n3tF_O_OJQ2OcEu3q20rSIcZM",
    authDomain: "drive-fce30.firebaseapp.com",
    projectId: "drive-fce30",
    storageBucket: "drive-fce30.appspot.com",
    messagingSenderId: "815467226598",
    appId: "1:815467226598:web:9620bfd3170dc17e652227",
    measurementId: "G-0CN9WYFHQ9"
  };

  
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }