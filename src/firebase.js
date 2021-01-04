// apiKey: "AIzaSyC_ZoiSKFT-8lN_di0bXDdZXuZidYCQ4Xk",
// authDomain: "chat-19d2d.firebaseapp.com",
// projectId: "chat-19d2d",
// storageBucket: "chat-19d2d.appspot.com",
// messagingSenderId: "825729000488",
// appId: "1:825729000488:web:e0b43fec00e43ccdc2c11d",
// measurementId: "G-GMQ5181HB7"
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC_ZoiSKFT-8lN_di0bXDdZXuZidYCQ4Xk",
    authDomain: "chat-19d2d.firebaseapp.com",
    projectId: "chat-19d2d",
    storageBucket: "chat-19d2d.appspot.com",
    messagingSenderId: "825729000488",
    appId: "1:825729000488:web:e0b43fec00e43ccdc2c11d",
    measurementId: "G-GMQ5181HB7"
});

const db = firebase.firestore();

export default db;
