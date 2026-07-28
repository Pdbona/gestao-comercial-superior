import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, doc, onSnapshot, query, where } from 'firebase/firestore';

/* ============================================================
   CONFIGURAÇÃO FIREBASE
   ============================================================
   
   IMPORTANTE: 
   1. Crie um projeto no Firebase (firebase.google.com)
   2. Crie um Firestore Database
   3. Pegue as credenciais (Settings → Project Settings → Seu app Web)
   4. Cole o bloco firebaseConfig abaixo, substituindo os valores
   
   ============================================================ */

const firebaseConfig = {
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpI7bI--mEpMvwhKL4RB2vQ1nqBNF1c4M",
  authDomain: "gestao-comercial-superior.firebaseapp.com",
  projectId: "gestao-comercial-superior",
  storageBucket: "gestao-comercial-superior.firebasestorage.app",
  messagingSenderId: "989226975878",
  appId: "1:989226975878:web:934508aaa527b79b4c4707"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* ============================================================
   FUNÇÕES DE STORAGE (Firestore)
   ============================================================ */

// Coleções no Firestore
const COLECOES = {
  PARAMETROS: 'parametros',
  CLIENTES: 'clientes'
};

// Carregar parâmetros do Firestore
export async function carregarParametros() {
  try {
    const snapshot = await getDocs(collection(db, COLECOES.PARAMETROS));
    const parametros = {};
    snapshot.forEach(doc => {
      parametros[doc.id] = doc.data();
    });
    return parametros;
  } catch (error) {
    console.error('Erro ao carregar parâmetros:', error);
    return null;
  }
}

// Salvar parâmetros no Firestore
export async function salvarParametros(parametros) {
  try {
    const docRef = doc(db, COLECOES.PARAMETROS, 'config');
    await setDoc(docRef, parametros, { merge: true });
    return true;
  } catch (error) {
    console.error('Erro ao salvar parâmetros:', error);
    return false;
  }
}

// Carregar clientes do Firestore
export async function carregarClientes() {
  try {
    const snapshot = await getDocs(collection(db, COLECOES.CLIENTES));
    const clientes = [];
    snapshot.forEach(doc => {
      clientes.push({ id: doc.id, ...doc.data() });
    });
    return clientes;
  } catch (error) {
    console.error('Erro ao carregar clientes:', error);
    return [];
  }
}

// Salvar cliente no Firestore
export async function salvarCliente(cliente) {
  try {
    const docRef = doc(db, COLECOES.CLIENTES, cliente.id || Date.now().toString());
    await setDoc(docRef, cliente, { merge: true });
    return true;
  } catch (error) {
    console.error('Erro ao salvar cliente:', error);
    return false;
  }
}

// Sincronização em tempo real de parâmetros
export function inscreverParametros(callback) {
  try {
    return onSnapshot(collection(db, COLECOES.PARAMETROS), (snapshot) => {
      const parametros = {};
      snapshot.forEach(doc => {
        parametros[doc.id] = doc.data();
      });
      callback(parametros);
    }, (error) => {
      console.error('Erro na sincronização de parâmetros:', error);
      callback(null);
    });
  } catch (error) {
    console.error('Erro ao inscrever parâmetros:', error);
    return null;
  }
}

// Sincronização em tempo real de clientes
export function inscreverClientes(callback) {
  try {
    return onSnapshot(collection(db, COLECOES.CLIENTES), (snapshot) => {
      const clientes = [];
      snapshot.forEach(doc => {
        clientes.push({ id: doc.id, ...doc.data() });
      });
      callback(clientes);
    }, (error) => {
      console.error('Erro na sincronização de clientes:', error);
      callback(null);
    });
  } catch (error) {
    console.error('Erro ao inscrever clientes:', error);
    return null;
  }
}

export default db;
