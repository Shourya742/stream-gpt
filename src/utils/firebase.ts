// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB65zkvkp6bihbD4-h8Cm3hORKgP6Qqsro",
  authDomain: "streamgpt-58e53.firebaseapp.com",
  projectId: "streamgpt-58e53",
  storageBucket: "streamgpt-58e53.appspot.com",
  messagingSenderId: "98473373044",
  appId: "1:98473373044:web:76a452a867d18dda6d9021",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
