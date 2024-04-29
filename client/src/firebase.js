// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwE4uBj6CXzLdVJdasUQYN3SYDeMor1gY",
  authDomain: "quiz-app-772a7.firebaseapp.com",
  projectId: "quiz-app-772a7",
  storageBucket: "quiz-app-772a7.appspot.com",
  messagingSenderId: "290495088098",
  appId: "1:290495088098:web:864d1aa95eed3eb61225bb",
  measurementId: "G-MYELBC50TH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
