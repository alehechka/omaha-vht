import authReducer from './authReducer';
import genericReducer from './genericReducer';
import collectionReducer from './collectionReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	generic: genericReducer,
	auth: authReducer,
	collections: collectionReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer,
});

export default rootReducer;
