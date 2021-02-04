// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCw2GUwTlsgwMvT_bfEHGmrhb7-TM6rzJA",
    authDomain: "linkedin-clone-yt-e3830.firebaseapp.com",
    projectId: "linkedin-clone-yt-e3830",
    storageBucket: "linkedin-clone-yt-e3830.appspot.com",
    messagingSenderId: "379276107266",
    appId: "1:379276107266:web:6e915f6457255dfb1bd11b",
    measurementId: "G-39C6PXZTP2" 
  };

  const firebaseApp = firebase.initializaApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth(); 

  export {db, auth};