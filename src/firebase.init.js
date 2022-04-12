// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB4nTZ96tccxiNut8wBgu97U3pwuysv_xg",
	authDomain: "simple-login-system-46c31.firebaseapp.com",
	projectId: "simple-login-system-46c31",
	storageBucket: "simple-login-system-46c31.appspot.com",
	messagingSenderId: "15392331661",
	appId: "1:15392331661:web:1ec43dc1b5ff5956b18fc4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
