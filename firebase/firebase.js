// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDUb1kEb-ps34v5HtsWMF6fD6rE1pNNE_k",

  authDomain: "styrate-fa91c.firebaseapp.com",

  projectId: "styrate-fa91c",

  storageBucket: "styrate-fa91c.appspot.com",

  messagingSenderId: "748683794615",

  appId: "1:748683794615:web:36a829e3152d8147615532"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
