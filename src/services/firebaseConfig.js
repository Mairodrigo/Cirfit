// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAcRlKbbcChXLYkK7ODOsjALLEGslXO5bE",
	authDomain: "cirfit-8a42c.firebaseapp.com",
	projectId: "cirfit-8a42c",
	storageBucket: "cirfit-8a42c.appspot.com",
	messagingSenderId: "351282116690",
	appId: "1:351282116690:web:3939a700ae550dc695478b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
