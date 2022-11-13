// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0bEbNPf9oEE-Qj_8QxXxS056xOrq4Hvs",
  authDomain: "realtor-react-clone-30b93.firebaseapp.com",
  projectId: "realtor-react-clone-30b93",
  storageBucket: "realtor-react-clone-30b93.appspot.com",
  messagingSenderId: "706265638872",
  appId: "1:706265638872:web:93a684b96416f471be34ad"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();