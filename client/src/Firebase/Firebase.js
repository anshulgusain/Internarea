// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzTRQXt6PsWMW2G7Rgg6bV7bj3u4m_ym8",
  authDomain: "internarea999.firebaseapp.com",
  projectId: "internarea999",
  storageBucket: "internarea999.appspot.com",
  messagingSenderId: "712654432785",
  appId: "1:712654432785:web:d9a419cb9e5c88c9135fb0",
  measurementId: "G-Q427526MCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}
