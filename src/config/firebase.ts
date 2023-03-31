import * as firebase from '@firebase/app';
import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  
  apiKey: 'AIzaSyBWAT_wwmYQqTzd9gPq10QuU2uNi8Hzfwg',
  authDomain: 'netflix-clone-3f85e.firebaseapp.com',
  projectId: 'netflix-clone-3f85e',
  storageBucket: 'netflix-clone-3f85e.appspot.com',
  messagingSenderId: '918503949874',
  appId: '1:918503949874:web:af524bd0d941a665649e2b',
  measurementId: 'G-P2238FTWZL',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);
export { auth };
export default db;
