// Importer Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDX02Cm_tu5LvnCqk7cB20W56iJxg82Uiw",  // Remplace par ta clé API
  authDomain: "ihl-reparation.firebaseapp.com",
  projectId: "ihl-reparation",
  storageBucket: "ihl-reparation.appspot.com",
  messagingSenderId: "46403409405",
  appId: "1:46403409405:web:1234567890abcdef",  // Remplace par ton appId
  measurementId: "G-XXXXXX"  // Remplace par ton measurementId
};

// Initialiser Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Obtenir les services Firebase
const auth = firebaseApp.auth();
const firestore = firebaseApp.firestore();

export { auth, firestore };