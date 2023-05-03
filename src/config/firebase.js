import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCb1ytpJBWGUagW0H4QPZ_CxQAMsTk5W3Q",
  authDomain: "employeemanagement-bd523.firebaseapp.com",
  databaseURL: "https://employeemanagement-bd523-default-rtdb.firebaseio.com",
  projectId: "employeemanagement-bd523",
  storageBucket: "employeemanagement-bd523.appspot.com",
  messagingSenderId: "681636128343",
  appId: "1:681636128343:web:e6c2848396627530016512",
  measurementId: "G-X8NNH0P7N0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();
export const db = getFirestore(app);
