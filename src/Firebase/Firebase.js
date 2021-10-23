import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCZi_aIUbuIu7kpRHOtwDIFHBNkOITnEY4",
    authDomain: "coderhouse-ninnabyac.firebaseapp.com",
    databaseURL: "https://coderhouse-ninnabyac-default-rtdb.firebaseio.com",
    projectId: "coderhouse-ninnabyac",
    storageBucket: "coderhouse-ninnabyac.appspot.com",
    messagingSenderId: "716521163737",
    appId: "1:716521163737:web:4ff46229407de27f50e7c8"
  };
  const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)