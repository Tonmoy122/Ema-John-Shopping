// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJgO5JTk7fNfPMHShDbBScaECk5bK3SPg",
    authDomain: "ema-john-auth-firebase.firebaseapp.com",
    projectId: "ema-john-auth-firebase",
    storageBucket: "ema-john-auth-firebase.appspot.com",
    messagingSenderId: "884980099814",
    appId: "1:884980099814:web:29d20c049903a1ec3d6927"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;