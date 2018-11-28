import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyB7Qry5-W7TVBKIzSD9YHDl93vqvzQtw5Y",
    authDomain: "brainyactz-digital-signage.firebaseapp.com",
    databaseURL: "https://brainyactz-digital-signage.firebaseio.com",
    projectId: "brainyactz-digital-signage",
    storageBucket: "brainyactz-digital-signage.appspot.com",
    messagingSenderId: "233054572554"

});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;