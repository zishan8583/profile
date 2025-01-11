// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "api key ",
  authDomain: "calcity.fireseapp.om",
  projectId: "calcity",
  storageBucket: "caly.appot.com",
  messagingSenderId: "66956471555555",
  appId: "1:6633a8ef1b8b31e1",
  measurementId: "G-T0R91R"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
