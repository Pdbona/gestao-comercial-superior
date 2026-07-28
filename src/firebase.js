import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDpI7bI--mEpMvwhKL4RB2vQ1nqBNF1c4M",
  authDomain: "gestao-comercial-superior.firebaseapp.com",
  projectId: "gestao-comercial-superior",
  storageBucket: "gestao-comercial-superior.firebasestorage.app",
  messagingSenderId: "989226975878",
  appId: "1:989226975878:web:934508aaa527b79b4c4707"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
