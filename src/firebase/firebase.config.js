// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu8rmVoXpk5VijTDgOWcfDpjKYyznipBk",
  authDomain: "react-dragon-news-auth-8fd3b.firebaseapp.com",
  projectId: "react-dragon-news-auth-8fd3b",
  storageBucket: "react-dragon-news-auth-8fd3b.appspot.com",
  messagingSenderId: "498452456126",
  appId: "1:498452456126:web:17b6ef7627d50d6f0934ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;