// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc8d-c4CqekCEMrmbkMBdcLFOzuPbx19Q",
  authDomain: "instanextt.firebaseapp.com",
  projectId: "instanextt",
  storageBucket: "instanextt.appspot.com",
  messagingSenderId: "626662486002",
  appId: "1:626662486002:web:105e5d1278144740bec56b",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
