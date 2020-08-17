import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import 'firebase/database';

//Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyAhEyx1IG2e0tl6kuurY6nSEaBAAJvojyw',
	authDomain: 'omaha-vht.firebaseapp.com',
	databaseURL: 'https://omaha-vht.firebaseio.com',
	projectId: 'omaha-vht',
	storageBucket: 'omaha-vht.appspot.com',
	messagingSenderId: '898531728698',
	appId: '1:898531728698:web:a0a4c3d4e203a8f5fd4403',
	measurementId: 'G-SX5FP6VLCT',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

firebase
	.firestore()
	.enablePersistence()
	.catch(function (err: any) {
		if (err.code === 'failed-precondition') {
			// Multiple tabs open, persistence can only be enabled
			// in one tab at a a time.
			// ...
		} else if (err.code === 'unimplemented') {
			// The current browser does not support all of the
			// features required to enable persistence
			// ...
		}
	});
// Subsequent queries will use persistence, if it was enabled successfully

export default firebase;
