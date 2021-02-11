import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBaWnbF_zP09GFQOIafR_ovmZ0_1nugTO8',
  authDomain: 'nextfire-741c7.firebaseapp.com',
  projectId: 'nextfire-741c7',
  storageBucket: 'nextfire-741c7.appspot.com',
  messagingSenderId: '312028718928',
  appId: '1:312028718928:web:090aff2394a4bd5a876e55',
  measurementId: 'G-0HW52P2Q6K'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
