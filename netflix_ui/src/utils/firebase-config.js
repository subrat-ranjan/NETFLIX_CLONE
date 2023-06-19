
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCTzPfpCg-g8wbv5qbU6EI5Z6cKqpJNSfQ",
    authDomain: "react-netflix-clone-66b6c.firebaseapp.com",
    projectId: "react-netflix-clone-66b6c",
    storageBucket: "react-netflix-clone-66b6c.appspot.com",
    messagingSenderId: "424059608360",
    appId: "1:424059608360:web:2753e554688da70f6f841d",
    measurementId: "G-24HTQE6VGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);