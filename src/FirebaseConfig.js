// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMzCTc888IbbvCOGTYVUJ7VYa83JA05Ec",
  authDomain: "carpulse-148db.firebaseapp.com",
  projectId: "carpulse-148db",
  storageBucket: "carpulse-148db.appspot.com",
  messagingSenderId: "908754286744",
  appId: "1:908754286744:web:b2ff1fb4981f6afe4bb8ed"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };
