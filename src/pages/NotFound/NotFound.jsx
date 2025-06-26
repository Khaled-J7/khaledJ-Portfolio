import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
	return (
		<div className={styles.container}>
			<div className={styles.glitchWrapper}>
				<div className={styles.glitch} data-text='404'>
					404
				</div>
			</div>
			<h2 className={styles.subtitle}>Page Not Found</h2>
			<p className={styles.description}>
				Oops! The page you're looking for seems to have gotten lost in the
				digital void.
			</p>
			<Link to='/' className={styles.homeButton}>
				Return to Home
			</Link>
		</div>
	);
};

export default NotFound;
