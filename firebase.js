import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "club-attendance-22f51.firebaseapp.com",
  projectId: "club-attendance-22f51",
  storageBucket: "club-attendance-22f51.appspot.com",
  messagingSenderId: "645898617774",
  appId: "1:645898617774:web:12dd99fcc51a86ea607e3f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
