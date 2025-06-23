import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgir3jUOhZwMXM-8OrjCFNZFZETt_NIi8",                // Replace with your Firebase API key
  authDomain: "match-dil.firebaseapp.com",
  projectId: "match-dil",
  storageBucket: "match-dil.appspot.com",
  messagingSenderId: "38085383876",
  appId: "1:38085383876:web:ab2c252fbd377937f3db91"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
