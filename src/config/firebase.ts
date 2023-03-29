import {firebase} from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBWAT_wwmYQqTzd9gPq10QuU2uNi8Hzfwg",
  authDomain: "netflix-clone-3f85e.firebaseapp.com",
  projectId: "netflix-clone-3f85e",
  storageBucket: "netflix-clone-3f85e.appspot.com",
  messagingSenderId: "918503949874",
  appId: "1:918503949874:web:af524bd0d941a665649e2b",
  measurementId: "G-P2238FTWZL"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export {auth};
export default db;

