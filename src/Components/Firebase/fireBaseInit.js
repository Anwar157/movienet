// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgIPjCvxMruzdqoRS65AXWgcknWc2_-Aw",
  authDomain: "fir-auth-7a8b6.firebaseapp.com",
  projectId: "fir-auth-7a8b6",
  storageBucket: "fir-auth-7a8b6.firebasestorage.app",
  messagingSenderId: "318307859646",
  appId: "1:318307859646:web:96bcf85e2e5dc3f1b872ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;