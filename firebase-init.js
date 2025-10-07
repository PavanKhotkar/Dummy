// ✅ Import Firebase modules directly from the CDN (browser-friendly)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ✅ Use your exact Firebase configuration (from your console)
const firebaseConfig = {
  apiKey: "AIzaSyBDSa716z7GOcZjiSi9eIChUEDUwcVVsr8",
  authDomain: "maya-d296c.firebaseapp.com",
  projectId: "maya-d296c",
  storageBucket: "maya-d296c.firebasestorage.app",
  messagingSenderId: "23957520645",
  appId: "1:23957520645:web:ea25489a8ec78afb4bf76c"
};

// ✅ Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Example: Add data
async function addUserData() {
  await addDoc(collection(db, "users"), {
    name: "Pavan",
    role: "Admin",
    createdAt: new Date()
  });
  console.log("✅ Data added to Firestore!");
}

// Example: Read data
async function readUserData() {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
}

addUserData();
readUserData();
