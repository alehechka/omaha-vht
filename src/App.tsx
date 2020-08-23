import React from 'react';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Home from 'components/pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FirestoreProvider from 'FirestoreProvider';
import Demo from 'components/pages/Demo';

function MainContent() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/demo/:id' component={Demo} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

const App = () => {
	return (
		<FirestoreProvider>
			<MainContent />
		</FirestoreProvider>
	);
};

export default App;
