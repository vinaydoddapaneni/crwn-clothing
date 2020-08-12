import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCXokm-hSL_UQTrmdxmlxALtrcyzpXMY2o",
    authDomain: "crwn-db-a4f6f.firebaseapp.com",
    databaseURL: "https://crwn-db-a4f6f.firebaseio.com",
    projectId: "crwn-db-a4f6f",
    storageBucket: "crwn-db-a4f6f.appspot.com",
    messagingSenderId: "817039060288",
    appId: "1:817039060288:web:941b32a3589fffd0605ea5",
    measurementId: "G-481G3H7ZCF"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;