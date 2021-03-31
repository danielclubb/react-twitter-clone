import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBKThjNNHhyul2GLlxF99y3BY5Qwdu_-SQ",
    authDomain: "twitter-d00d2.firebaseapp.com",
    projectId: "twitter-d00d2",
    storageBucket: "twitter-d00d2.appspot.com",
    messagingSenderId: "548037594051",
    appId: "1:548037594051:web:162d63821fc93dd2b6cb76"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;