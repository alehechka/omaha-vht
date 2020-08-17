import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path='/' component={Main} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
