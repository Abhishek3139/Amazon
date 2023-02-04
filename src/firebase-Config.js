// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw_f0rzTv0FAZ4RyG1Y04EJZWoR8zBNC8",
  authDomain: "fir-2b3a2.firebaseapp.com",
  projectId: "fir-2b3a2",
  storageBucket: "fir-2b3a2.appspot.com",
  messagingSenderId: "221629409508",
  appId: "1:221629409508:web:73983e3aaa9669b4d724f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
