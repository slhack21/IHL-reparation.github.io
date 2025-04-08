// Importer Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Configuration Firebase (remplace par ta propre configuration)
const firebaseConfig = {
  apiKey: "AIzaSyDX02Cm_tu5LvnCqk7cB20W56iJxg82Uiw",  // Ta clé API
  authDomain: "ihl-reparation.firebaseapp.com",     // Ton authDomain
  projectId: "ihl-reparation",                      // Ton projectId
  storageBucket: "ihl-reparation.appspot.com",      // Ton storageBucket
  messagingSenderId: "46403409405",                // Ton senderId
  appId: "1:46403409405:web:1234567890abcdef",     // Ton appId
  measurementId: "G-XXXXXX"                         // Ton measurementId
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Récupérer les services Firebase
const auth = firebase.auth();
const firestore = firebase.firestore();

// Fonction pour se connecter avec Google
const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await auth.signInWithPopup(provider);
    const user = result.user;

    // Enregistrer l'utilisateur dans Firestore
    await firestore.collection('utilisateurs').doc(user.uid).set({
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL
    });

    console.log('Utilisateur connecté :', user);
    alert(`Bienvenue ${user.displayName}`);
  } catch (error) {
    console.error('Erreur de connexion Google:', error);
    alert("Erreur de connexion. Veuillez réessayer.");
  }
};

// Ajouter l'événement sur le bouton de connexion
document.getElementById("googleSignInBtn").addEventListener("click", signInWithGoogle);
