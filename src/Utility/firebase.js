import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU2uqZkSUdWHAiyMqeKVKUEzwBD3z0hGQ",
  authDomain: "e-clone-73403.firebaseapp.com",
  projectId: "e-clone-73403",
  storageBucket: "e-clone-73403.appspot.com",
  messagingSenderId: "1027935191682",
  appId: "1:1027935191682:web:2b67e673104a95c8772a9b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = app.firestore()