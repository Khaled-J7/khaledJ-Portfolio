import React from 'react';
import styles from './Hero.module.css';
import profileImg from '../../assets/KhaledJallouliImg.jpg';
import resumePDF from '../../assets/KhaledJallouliResume.pdf';
import TechMarquee from '../../components/TechMarquee/TechMarquee';

const Hero = () => {
	return (
		<section id='about' className={styles.section}>
			<div className={styles.mainContent}>
				<div className='d-flex flex-column flex-md-row align-items-center'>
					<div
						className={`col-md-6 d-flex justify-content-center mb-4 mb-md-0 ${styles.imageContainer}`}
					>
						<img
							src={profileImg}
							className={styles.profileImg}
							alt='A professional photo of Khaled Jallouli'
						/>
						<div className={styles.statusBubble}>
							<div className={styles.statusDot}></div>
							<span>Open to new opportunities</span>
						</div>
					</div>

					<div className='col-md-6'>
						<h1 className={styles.title}>
							<span className={styles.wordFull}>Full</span>
							<span className={styles.wordStack}>Stack</span>
							<span className={styles.wordDeveloper}>Developer</span>
						</h1>
						<p className={styles.description}>
							I craft seamless and dynamic digital experiences from front-end to
							back-end. My passion lies in solving complex problems and building
							elegant, high-performance web and mobile applications.
						</p>

						<div className={styles.buttonContainer}>
							<a
								href={resumePDF}
								download='KhaledJallouli-Resume.pdf'
								className={styles.btn}
							>
								Download Resume
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									className='bi bi-download ms-2'
									viewBox='0 0 16 16'
								>
									<path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5' />
									<path d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z' />
								</svg>
							</a>
							<a href='#contact' className={styles.btn}>
								Contact Me
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									className='bi bi-envelope-arrow-up-fill ms-2'
									viewBox='0 0 16 16'
								>
									<path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z' />
									<path d='M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354a.5.5 0 0 0-.708 0L12 10.793l-.146-.147a.5.5 0 0 0-.708.708l.5.5a.5.5 0 0 0 .708 0l.5-.5a.5.5 0 0 0 0-.708M12 8a.5.5 0 0 0-1 0v3.5a.5.5 0 0 0 1 0z' />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
			<TechMarquee />
		</section>
	);
};

export default Hero;
