import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
