// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-Cb8RqQCUW3vnV61grLVnACmok8Ywaw4",
    authDomain: "divyansh-react.firebaseapp.com",
    databaseURL: "https://divyansh-react-default-rtdb.firebaseio.com",
    projectId: "divyansh-react",
    storageBucket: "divyansh-react.firebasestorage.app",
    messagingSenderId: "942139713834",
    appId: "1:942139713834:web:f443b5c59cdb13c5771653",
    measurementId: "G-RV6LPKQ7CF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { app, db };