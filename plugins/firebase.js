import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "AIzaSyD7ZoFP3gSuLJwSBzC7Y_xixofnZyz0zg0",
    authDomain: "firebacepj2.firebaseapp.com",
    projectId: "firebacepj2",
    storageBucket: "firebacepj2.appspot.com",
    messagingSenderId: "348657131338",
    appId: "1:348657131338:web:fac1cb42dfdc15276c6bb3",
    measurementId: "G-L3CLESE9GX"
    }
  )
}
  
export default firebase
