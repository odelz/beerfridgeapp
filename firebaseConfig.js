// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set} from 'firebase/database'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAahKHfcLoKtO9Vj0_JZnLi_1vU4SLsa3c",
  authDomain: "beer-fridge-41fdf.firebaseapp.com",
  projectId: "beer-frige-41fdf",
  databaseUrl: "https://beer-fridge-41fdf-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "beer-fridge-41fdf.appspot.com",
  messagingSenderId: "924019040759",
  appId: "1:924019040759:web:2b25bede8665fe3fe18ef2",
  measurementId: "G-NMPYC1BL8C"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
