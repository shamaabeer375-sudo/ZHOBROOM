
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDiso8BvuRZSWko7kTEsBtu99MKKGD7Myk",
authDomain: "zhobchat-33d8e.firebaseapp.com",
databaseURL: "https://zhobchat-33d8e-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "zhobchat-33d8e",
storageBucket: "zhobchat-33d8e.firebasestorage.app",
messagingSenderId: "116466089929",
appId: "1:116466089929:web:06e914c8ed81ba9391f218",
measurementId: "G-LX9P9LRLV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
