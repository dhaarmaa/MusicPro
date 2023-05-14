import { initializeApp } from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCCggpfgJ9vY71f5xQ82MFjhQ2s4EHDzso",
    authDomain: "musicpro-3f56a.firebaseapp.com",
    projectId: "musicpro-3f56a",
    storageBucket: "musicpro-3f56a.appspot.com",
    messagingSenderId: "656357157115",
    appId: "1:656357157115:web:77e18b9af3b1a72a13285e"
  };

  const app = initializeApp(firebaseConfig);
  //const fs = app.firestore();

  export default app;