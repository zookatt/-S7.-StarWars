import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsNUsMmqyxUUZPwc7Rwu3bGwn7tl16we4",
  authDomain: "starwars-9abbd.firebaseapp.com",
  projectId: "starwars-9abbd",
  storageBucket: "starwars-9abbd.appspot.com",
  messagingSenderId: "36616379062",
  appId: "1:36616379062:web:12ef6ab3796f519e236417"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};