import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC02hWjbrbnRHoA7dozX8Q5nTr_iElaeV4",
  authDomain: "bikotoursug.firebaseapp.com",
  projectId: "bikotoursug",
  storageBucket: "bikotoursug.appspot.com",
  messagingSenderId: "908516935701",
  appId: "1:908516935701:web:f41a22425be494d718a61c",
  measurementId: "G-KVKHTB2QV7",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const firestore = getFirestore();

export {firestore}