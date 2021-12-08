import * as firebase from "firebase/app";
import * as firestore from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyCPRHZoRNuFL_6R_HRx49d_pZU8rRE6YBQ",
    authDomain: "coderhouse-react-a76a6.firebaseapp.com",
    projectId: "coderhouse-react-a76a6",
    storageBucket: "coderhouse-react-a76a6.appspot.com",
    messagingSenderId: "1056197126639",
    appId: "1:1056197126639:web:6c5b9440c0708cbcc1ae1a"
  };

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}

export function getDatabase() {
    return firestore.getFirestore(); //devuelve la base de datos.
}