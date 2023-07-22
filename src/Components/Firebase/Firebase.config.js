// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ3CU8Y-MlmdKpn-ekWRghx-AM3TowF5w",
  authDomain: "care-vibe.firebaseapp.com",
  projectId: "care-vibe",
  storageBucket: "care-vibe.appspot.com",
  messagingSenderId: "422961596903",
  appId: "1:422961596903:web:31fdbd4a605f9717355542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;