// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMDyp1_LIMYXV6UtyeM1ntyI8EQnzi1J0",
  authDomain: "coffee-order-ceed0.firebaseapp.com",
  projectId: "coffee-order-ceed0",
  storageBucket: "coffee-order-ceed0.appspot.com",
  messagingSenderId: "390941581164",
  appId: "1:390941581164:web:abc52e507b5f7328ab1d49",
  measurementId: "G-43580KE9EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



{
  "hosting": {
    "site": "coffee-order-ceed0-38357",

    "public": "public",
    ...
  }
}


firebase deploy --only hosting:coffee-order-ceed0-38357