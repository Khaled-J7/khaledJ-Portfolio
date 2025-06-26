import React from 'react';
import styles from './Experience.module.css';

import universityLogo from '../../assets/University-gafsa.jpg';
import holbertonLogo from '../../assets/HolbertonSchool-logo.png';
import techxLogo from '../../assets/techx-logo-image.jpg';
import universityBg from '../../assets/fac_science_background.png';
import techxBg from '../../assets/techX_background.png';
import graduationPhoto from '../../assets/HolbertonSchool-Graduation.png';

const Experience = () => {
	return (
		<section id='experience' className={styles.container}>
			<h2 className={styles.title}>My Journey</h2>
			<div
				className={`${styles.content} d-flex flex-column flex-lg-row justify-content-center align-items-center`}
			>
				{/* Card 1: University of Gafsa */}
				<div
					className={`${styles.card} ${styles.universityCard}`}
					style={{ '--bg-image': `url(${universityBg})` }}
				>
					<div className={styles.cardContent}>
						<div className={styles.cardFront}>
							<img
								src={universityLogo}
								alt='University of Gafsa Logo'
								className={styles.logo}
							/>
							<h3 className={styles.cardTitle}>University of Gafsa</h3>
							<p className={styles.cardSubtitle}>Foundation Studies</p>
						</div>
						<div className={styles.cardBack}>
							<p>
								My foundational journey into the world of logic and algorithms
								began here, sparking a passion for solving complex computational
								problems.
							</p>
						</div>
					</div>
				</div>

				<div className={`${styles.arrow} d-none d-lg-block`}></div>

				{/* Card 2: Holberton School */}
				<div
					className={`${styles.card} ${styles.holbertonCard}`}
					style={{ '--bg-image': `url(${graduationPhoto})` }}
				>
					<div className={styles.cardContent}>
						<div className={styles.cardFront}>
							<img
								src={holbertonLogo}
								alt='Holberton School Logo'
								className={styles.logo}
							/>
							<h3 className={styles.cardTitle}>Holberton School</h3>
							<p className={styles.cardSubtitle}>2023 - 2025</p>
						</div>
						<div className={styles.cardBack}>
							<p>
								A pivotal transition. I undertook an intensive, project-based
								curriculum, mastering the full stack from low-level programming
								to modern web frameworks.
							</p>
						</div>
					</div>
				</div>

				<div className={`${styles.arrow} d-none d-lg-block`}></div>

				{/* Card 3: TechX */}
				<div
					className={`${styles.card} ${styles.techxCard}`}
					style={{ '--bg-image': `url(${techxBg})` }}
				>
					<div className={styles.cardContent}>
						<div className={styles.cardFront}>
							<img src={techxLogo} alt='TechX Logo' className={styles.logo} />
							<h3 className={styles.cardTitle}>TechX Startup</h3>
							<p className={styles.cardSubtitle}>Freelance Experience</p>
						</div>
						<div className={styles.cardBack}>
							<p>
								Putting theory into practice. During my studies, I engaged in
								real-world freelance projects, delivering professional code in
								an agile environment.
							</p>
						</div>
					</div>
				</div>
			</div>
			<a href='#projects' className={styles.finalArrow}>
				<span>See My Work</span>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M12 19L12 5'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
					/>
					<path
						d='M18 13L12 19L6 13'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
					/>
				</svg>
			</a>
		</section>
	);
};

export default Experience;
