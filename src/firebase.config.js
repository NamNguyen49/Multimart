


import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBGpHJ1TMcAmLua8_3qSYg1U96WUJCMmkQ",
    authDomain: "maltimart-eac27.firebaseapp.com",
    projectId: "maltimart-eac27",
    storageBucket: "maltimart-eac27.appspot.com",
    messagingSenderId: "630826186397",
    appId: "1:630826186397:web:1e05d4c3a112e4d5cc0674"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app