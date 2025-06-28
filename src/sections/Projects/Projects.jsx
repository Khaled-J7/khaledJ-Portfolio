import React, { useState } from 'react';
import styles from './Projects.module.css';
import { motion, AnimatePresence } from 'framer-motion';

// --- CORRECT: Importing images so Vite can track them ---
import studySquadImg from '../../assets/project-images/Study_Squad_thumbnail.png';
import barberFactoryImg from '../../assets/project-images/BarberFactory_thumbnail.png';
import taskFlowImg from '../../assets/project-images/Task_Flow_thumbnail.png';
import azizParfumeriesImg from '../../assets/project-images/AzizParfumeries_thumbnail.png';
import seeMoreImg from '../../assets/project-images/SEE_OTHER_PROJECTS_thumbnail.png';

const projectsData = [
	{
		image: studySquadImg,
		title: 'StudySquad',
		description:
			'A collaborative platform for students and teachers, featuring live video courses, a real-time whiteboard, chat, and file sharing capabilities.',
		tech: 'React | Django | WebRTC | Socket.IO',
		link: 'https://github.com/Khaled-J7/Study-Squad',
	},
	{
		image: barberFactoryImg,
		title: 'BarberFactory',
		description:
			'A mobile application connecting clients with barbers for easy discovery and appointment booking, providing a seamless experience for both users and businesses.',
		tech: 'React Native | Node.js | Express.js | MongoDB',
		link: 'https://github.com/Khaled-J7/Portfolio-BarberFactory',
	},
	{
		image: taskFlowImg,
		title: 'TaskFlow',
		description:
			'A collaborative task management system allowing users to create projects, manage tasks, assign team members, and track progress with real-time notifications.',
		tech: 'Django | DRF | Channels | HTMX',
		link: 'https://github.com/Khaled-J7/taskflow',
	},
	{
		image: azizParfumeriesImg,
		title: 'Aziz Parfumeries',
		description:
			'A bespoke e-commerce platform designed for a premium perfume client, featuring a sophisticated product showcase, secure checkout, and user account management.',
		tech: 'React | Django | PostgreSQL | Firebase',
		link: '#',
	},
	{
		image: seeMoreImg,
		title: 'And Many More...',
		description:
			'My passion for building extends beyond these highlights. Explore my GitHub to see a variety of other projects, from command-line tools to smaller web apps and clones.',
		tech: 'C | Python | JavaScript | Shell',
		link: 'https://github.com/Khaled-J7?tab=repositories',
	},
];

const Projects = () => {
	const [index, setIndex] = useState(0);

	const handleNext = () => {
		setIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
	};

	const handlePrev = () => {
		setIndex(
			(prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length
		);
	};

	return (
		<section id='projects' className={styles.container}>
			<h2 className={styles.title}>My Projects</h2>

			<div className={styles.carouselContainer}>
				<div className={styles.carousel}>
					<AnimatePresence>
						{projectsData.map((project, i) => {
							const offset =
								(i - index + projectsData.length) % projectsData.length;
							let zIndex = 0,
								x = '0%',
								scale = 1,
								opacity = 0;

							if (offset === 0) {
								zIndex = 3;
								x = '0%';
								scale = 1;
								opacity = 1;
							} else if (offset === 1) {
								zIndex = 2;
								x = '60%';
								scale = 0.8;
								opacity = 1;
							} else if (offset === projectsData.length - 1) {
								zIndex = 2;
								x = '-60%';
								scale = 0.8;
								opacity = 1;
							} else {
								zIndex = 1;
								scale = 0.6;
								opacity = 0;
								x = '0%';
							}

							return (
								<motion.div
									key={i}
									className={`${styles.projectCard} ${
										offset === 0 ? styles.activeCard : ''
									}`}
									initial={{ x, scale, opacity, zIndex }}
									animate={{ x, scale, opacity, zIndex }}
									transition={{ type: 'spring', stiffness: 300, damping: 30 }}
									onHoverStart={() => setIndex(i)}
								>
									<div className={styles.cardContent}>
										<img
											src={project.image}
											alt={project.title}
											className={styles.projectImage}
										/>
										<div className={styles.cardBack}>
											<h3 className={styles.projectTitle}>{project.title}</h3>
											<p className={styles.projectDescription}>
												{project.description}
											</p>
											<p className={styles.projectTech}>{project.tech}</p>
											<a
												href={project.link}
												target='_blank'
												rel='noopener noreferrer'
												className={styles.projectLink}
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='20'
													height='20'
													fill='currentColor'
													viewBox='0 0 16 16'
												>
													<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8' />
												</svg>
												<span>View on GitHub</span>
											</a>
										</div>
									</div>
								</motion.div>
							);
						})}
					</AnimatePresence>
				</div>

				<button className={styles.navButton} onClick={handlePrev}>
					‹
				</button>
				<button className={styles.navButton} onClick={handleNext}>
					›
				</button>
			</div>
		</section>
	);
};

export default Projects;
