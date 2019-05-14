import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAyIdR5rJ6p-JX5BVMeoksBURFgAs5mD5U",
  authDomain: "pool-party-app.firebaseapp.com",
  databaseURL: "https://pool-party-app.firebaseio.com",
  projectId: "pool-party-app",
  storageBucket: "pool-party-app.appspot.com",
  messagingSenderId: "875916367186",
  appId: "1:875916367186:web:71a4c5d40ff62bda"
};

export default firebase.initializeApp(firebaseConfig);