import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxdJ6f2WtbfIzjBjQDybxCSYYYEkTgc0E",
  authDomain: "effortless-earn-7f39e.firebaseapp.com",
  projectId: "effortless-earn-7f39e",
  storageBucket: "effortless-earn-7f39e.appspot.com",
  messagingSenderId: "554178513766",
  appId: "1:554178513766:web:d8d7edf915a95349cb16a7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
