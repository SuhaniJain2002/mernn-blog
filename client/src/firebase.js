// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernn-blog.firebaseapp.com",
  projectId: "mernn-blog",
  storageBucket: "mernn-blog.appspot.com",
  messagingSenderId: "148263945731",
  appId: "1:148263945731:web:afb01be1cb456a3952b036"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
