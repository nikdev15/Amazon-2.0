import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC1G-tVpaFPU1h1pqtenFnIzXdz6dEk2Fw",
    authDomain: "clone-f82a5.firebaseapp.com",
    projectId: "clone-f82a5",
    storageBucket: "clone-f82a5.appspot.com",
    messagingSenderId: "68855856442",
    appId: "1:68855856442:web:e38bec24eb37b6a526e403"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export default db;