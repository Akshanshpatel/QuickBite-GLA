import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBeY6rnq6I8XEEysuGU5xs8DrwDbJEmHKQ",
    authDomain: "whatsapp-clone-623d4.firebaseapp.com",
    projectId: "whatsapp-clone-623d4",
    storageBucket: "whatsapp-clone-623d4.firebasestorage.app",
    messagingSenderId: "1084975719207",
    appId: "1:1084975719207:web:dcbea95ed962e6b493ff02",
    measurementId: "G-8HMLCD01EC"
  };

  const app=initializeApp{firebaseConfig};
  export const firebaseAuth=getAuth(app);