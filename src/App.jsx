// src/App.jsx

import Navbar from './components/Navbar'; // <-- IMPORT IT
import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

function App() {
	return (
		<div>
			<Navbar />
			<main>
				<Hero />
				<About />
				<Experience />
				<Projects />
				<Contact />
			</main>
		</div>
	);
}

export default App;
