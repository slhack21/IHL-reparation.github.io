import { auth, firestore } from './firebase-config'; // Importer Firebase et Firestore

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

// Ajouter un gestionnaire d'événements pour le bouton de connexion
document.getElementById("googleSignInBtn").addEventListener("click", signInWithGoogle);