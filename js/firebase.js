
// Firebase SDK (модульна версія)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyB6Xch5Qgf4VrKk242hoitMFKlAbjgnUZQ",
  authDomain: "comic-cards.firebaseapp.com",
  projectId: "comic-cards",
  storageBucket: "comic-cards.firebasestorage.app",
  messagingSenderId: "105567969365",
  appId: "1:105567969365:web:8201d39cadfa5fe43df4dc"
};

// Ініціалізація
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
