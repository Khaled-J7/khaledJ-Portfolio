import React from 'react';
import styles from '../App.module.css';
import Hero from '../sections/Hero/Hero.jsx';
import Experience from '../sections/Experience/Experience';
import Projects from '../sections/Projects/Projects';
import Contact from '../sections/Contact/Contact';

const Home = () => {
	return (
		<main>
			<Hero />
			<Experience />
			<Projects />
			<Contact />
		</main>
	);
};

export default Home;
