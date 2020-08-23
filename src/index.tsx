import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import * as serviceWorker from 'serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';
import firebase from 'config/firebase';
import { useAuth } from 'components/reusable/Hooks';

function noop() {}
if (process.env.NODE_ENV !== 'development') {
	console.log = noop;
	console.warn = noop;
	console.error = noop;
}

const store = createStore(
	rootReducer,
	compose(applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })), reduxFirestore(firebase))
);

function AuthIsLoaded({ children }: { children: any }) {
	const auth = useAuth();
	if (!isLoaded(auth)) return <div>Loading...</div>;
	return children;
}

const rrfProps = {
	firebase,
	config: {
		useFirestoreForProfile: true,
		userProfile: 'users',
	},
	dispatch: store.dispatch,
	createFirestoreInstance,
};

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<AuthIsLoaded>
					<App />
				</AuthIsLoaded>
			</ReactReduxFirebaseProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
