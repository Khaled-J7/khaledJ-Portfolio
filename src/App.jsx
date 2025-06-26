import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
	return (
		<div className={styles.app}>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='*' element={<NotFound />} />{' '}
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
