import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDssvC5gKj6e8g4eLJf8bfjofpYlHWJbKU",
  authDomain: "clothing-db-e7cd1.firebaseapp.com",
  projectId: "clothing-db-e7cd1",
  storageBucket: "clothing-db-e7cd1.appspot.com",
  messagingSenderId: "153941942779",
  appId: "1:153941942779:web:ff28719bbbe34a5fb02b5e",
  measurementId: "G-X88H7RV9V6",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
