import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createContext, useContext } from 'react';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjWuhi2ZaJKZMjnNX6VUx8p3buS9tIsms",
  authDomain: "react-blog-site-8d6de.firebaseapp.com",
  projectId: "react-blog-site-8d6de",
  storageBucket: "react-blog-site-8d6de.firebasestorage.app",
  messagingSenderId: "449154705633",
  appId: "1:449154705633:web:8eeb8275bac31232feafa0",
  measurementId: "G-SW3F9FCZXY"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
const db = getFirestore(app); 
const auth = getAuth(app);

const FirebaseAppContext = createContext();
export function FirebaseAppContextProvider({ children }) {
  return (
    <FirebaseAppContext.Provider value={{ db, auth }}>
      {children}
    </FirebaseAppContext.Provider> 
  );
}

export function useFirebaseAppContext() {
  return useContext(FirebaseAppContext);
}