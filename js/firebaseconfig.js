// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1M9yR2A6wom9tTID2YQtr8xXsVYpQ7Aw",
  authDomain: "iris-a4425.firebaseapp.com",
  projectId: "iris-a4425",
  storageBucket: "iris-a4425.firebasestorage.app",
  messagingSenderId: "662595473279",
  appId: "1:662595473279:web:c2032e207a1497cf1e544a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}