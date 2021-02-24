import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config={
    apiKey: "AIzaSyCHKzGagj1AC9wBxYkpJHDpigWBaI6Sgu4",
    authDomain: "crwn-db-1adf8.firebaseapp.com",
    projectId: "crwn-db-1adf8",
    storageBucket: "crwn-db-1adf8.appspot.com",
    messagingSenderId: "535123164495",
    appId: "1:535123164495:web:3e4073729af4d25194193a",
    measurementId: "G-7B590FYSWM"
};
firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;

