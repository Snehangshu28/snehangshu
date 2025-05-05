import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD8euVhDxo3K9K03UlYa3tULjcJbsK7weI",
  authDomain: "snehangshu-b876d.firebaseapp.com",
  projectId: "snehangshu-b876d",
  storageBucket: "snehangshu-b876d.firebasestorage.app",
  messagingSenderId: "488542203824",
  appId: "1:488542203824:web:68ff89f35cdd666220f075",
  measurementId: "G-22KXK0XW2X"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }; 