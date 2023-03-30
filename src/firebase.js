import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB52_yfVCJITOIXehQ0fz4S5Q0yz311sRM',
  authDomain: 'react-hooks-blog-caf2c.firebaseapp.com',
  projectId: 'react-hooks-blog-caf2c',
  storageBucket: 'react-hooks-blog-caf2c.appspot.com',
  messagingSenderId: '395108255094',
  appId: '1:395108255094:web:f0ee99f864d3af66dc6657',
};

firebase.initializeApp(firebaseConfig);
export const db = getFirestore();
