import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBFlgqVXfxOTM7wpmXhsJ5_TQUPiIeb7w0",
  authDomain: "otpphone-bc193.firebaseapp.com",
  projectId: "otpphone-bc193",
  storageBucket: "otpphone-bc193.appspot.com",
  messagingSenderId: "880235671904",
  appId: "1:880235671904:web:f6b1527fb5d26512baee05",
  measurementId: "G-5B3E3NP2BP",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
