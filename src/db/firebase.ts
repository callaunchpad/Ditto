// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAct5KJkathmhrQ7F6WrhmE5Sl8WXtdbC8",
  authDomain: "ditto-f2ed7.firebaseapp.com",
  projectId: "ditto-f2ed7",
  storageBucket: "ditto-f2ed7.appspot.com",
  messagingSenderId: "1023378124614",
  appId: "1:1023378124614:web:adcb87d0f5fd394e4d3f47"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
