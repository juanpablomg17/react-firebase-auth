import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : "",
    authDomain: process.env.REACT_APP_AUTH_DOMAIN ? process.env.REACT_APP_AUTH_DOMAIN : "",
    projectId: process.env.REACT_APP_PROJECT_ID ? process.env.REACT_APP_PROJECT_ID : "",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET ? process.env.REACT_APP_STORAGE_BUCKET : "",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID ? process.env.REACT_APP_MESSAGING_SENDER_ID : "",
    appId: process.env.REACT_APP_APP_ID ? process.env.REACT_APP_APP_ID : "",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
