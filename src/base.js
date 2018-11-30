import Rebase from 're-base';
import firebase from 'firebase';

const fb = firebase.initializeApp({

    apiKey: "AIzaSyB7Qry5-W7TVBKIzSD9YHDl93vqvzQtw5Y",
    authDomain: "brainyactz-digital-signage.firebaseapp.com",
    databaseURL: "https://brainyactz-digital-signage.firebaseio.com",
    projectId: "brainyactz-digital-signage",
    storageBucket: "brainyactz-digital-signage.appspot.com",
    messagingSenderId: "233054572554"

});

const base = Rebase.createClass(fb.database());

//const location_db = firebase.database().ref('location');


//export { location_db };

export { base };

export default fb.database();

