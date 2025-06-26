import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
			<a className={styles.logo} href='#about'>
				KJ
			</a>

			<div className={`${styles.rightSide} d-none d-lg-flex`}>
				<ul className={styles.links}>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#experience'>Experience</a>
					</li>
					<li>
						<a href='#projects'>Projects</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>

				<div className={styles.socialLinks}>
					<a
						href='https://github.com/Khaled-J7'
						target='_blank'
						rel='noopener noreferrer'
						className={`${styles.socialIcon} ${styles.githubIcon}`}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
						>
							<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
						</svg>
					</a>
					<a
						href='https://www.linkedin.com/in/khaled-jallouli-756272329/'
						target='_blank'
						rel='noopener noreferrer'
						className={`${styles.socialIcon} ${styles.linkedinIcon}`}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
						>
							<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
						</svg>
					</a>
					<a
						href='mailto:khaledjalloulidev@gmail.com'
						className={`${styles.socialIcon} ${styles.gmailIcon}`}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
						>
							<path d='M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z' />
						</svg>
					</a>
				</div>
			</div>

			<div className={`${styles.menuBtn} d-lg-none`}>
				<button onClick={() => setMenuOpen(!menuOpen)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='30'
						height='30'
						fill='currentColor'
						viewBox='0 0 16 16'
					>
						<path
							fillRule='evenodd'
							d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5'
						/>
					</svg>
				</button>
			</div>

			<div
				className={`${styles.menuOverlay} ${menuOpen ? styles.menuOpen : ''}`}
			>
				<button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='35'
						height='35'
						fill='currentColor'
						viewBox='0 0 16 16'
					>
						<path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708' />
					</svg>
				</button>
				<ul className={styles.menuOverlayLinks}>
					<li onClick={() => setMenuOpen(false)}>
						<a href='#about'>About</a>
					</li>
					<li onClick={() => setMenuOpen(false)}>
						<a href='#experience'>Experience</a>
					</li>
					<li onClick={() => setMenuOpen(false)}>
						<a href='#projects'>Projects</a>
					</li>
					<li onClick={() => setMenuOpen(false)}>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
				<div className={styles.socials}>
					<a
						href='https://github.com/Khaled-J7'
						target='_blank'
						rel='noopener noreferrer'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='30'
							height='30'
							fill='currentColor'
							viewBox='0 0 16 16'
						>
							<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8' />
						</svg>
					</a>
					<a
						href='https://www.linkedin.com/in/khaled-jallouli-756272329/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='30'
							height='30'
							fill='currentColor'
							viewBox='0 0 24 24'
						>
							<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
						</svg>
					</a>
					<a
						href='mailto:khaledjalloulidev@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='30'
							height='30'
							fill='currentColor'
							viewBox='0 0 16 16'
						>
							<path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.558Z' />
						</svg>
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
