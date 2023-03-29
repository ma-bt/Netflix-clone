// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWAT_wwmYQqTzd9gPq10QuU2uNi8Hzfwg",
  authDomain: "netflix-clone-3f85e.firebaseapp.com",
  projectId: "netflix-clone-3f85e",
  storageBucket: "netflix-clone-3f85e.appspot.com",
  messagingSenderId: "918503949874",
  appId: "1:918503949874:web:af524bd0d941a665649e2b",
  measurementId: "G-P2238FTWZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
