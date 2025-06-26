import React from 'react';
import styles from './TechMarquee.module.css';

// Importing the new, complete list of colored technology icons
import angularIcon from '../../assets/tech-icons/angular-icon.svg';
import bashIcon from '../../assets/tech-icons/bash-svgrepo-com.svg';
import bootstrapIcon from '../../assets/tech-icons/bootstrap-5-logo-icon.svg';
import cIcon from '../../assets/tech-icons/c-program-icon.svg';
import claudeIcon from '../../assets/tech-icons/claude-ai-icon.svg';
import copilotIcon from '../../assets/tech-icons/copilot-icon.svg';
import cssIcon from '../../assets/tech-icons/css-icon.svg';
import dartIcon from '../../assets/tech-icons/dart-programming-language-icon.svg';
import djangoIcon from '../../assets/tech-icons/django-icon.svg';
import dockerIcon from '../../assets/tech-icons/docker-icon.svg';
import expressIcon from '../../assets/tech-icons/Express.svg';
import fastapiIcon from '../../assets/tech-icons/fastapi-svgrepo-com.svg';
import flaskIcon from '../../assets/tech-icons/flask-svgrepo-com.svg';
import flutterIcon from '../../assets/tech-icons/flutter-icon.svg';
import gitIcon from '../../assets/tech-icons/git-icon.svg';
import githubIcon from '../../assets/tech-icons/github-icon.svg';
import firebaseIcon from '../../assets/tech-icons/google-firebase-icon.svg';
import htmlIcon from '../../assets/tech-icons/html-icon.svg';
import javascriptIcon from '../../assets/tech-icons/javascript.svg';
import jestIcon from '../../assets/tech-icons/jest-svgrepo-com.svg';
import linuxIcon from '../../assets/tech-icons/linux-icon.svg';
import mariadbIcon from '../../assets/tech-icons/mariadb-icon.svg';
import mongodbIcon from '../../assets/tech-icons/mongodb-icon.svg';
import mysqlIcon from '../../assets/tech-icons/mysql-icon.svg';
import nestjsIcon from '../../assets/tech-icons/nest-js-icon.svg';
import nextjsIcon from '../../assets/tech-icons/nextjs-icon.svg';
import nodejsIcon from '../../assets/tech-icons/node-js-icon.svg';
import nuxtjsIcon from '../../assets/tech-icons/nuxt-js-icon.svg';
import postgresqlIcon from '../../assets/tech-icons/postgresql-icon.svg';
import postmanIcon from '../../assets/tech-icons/postman-icon.svg';
import pythonIcon from '../../assets/tech-icons/python.svg';
import reactIcon from '../../assets/tech-icons/react-js-icon.svg';
import redisIcon from '../../assets/tech-icons/redis-icon.svg';
import reduxIcon from '../../assets/tech-icons/redux-icon.svg';
import sassIcon from '../../assets/tech-icons/sass-icon.svg';
import tailwindIcon from '../../assets/tech-icons/tailwind-css-icon.svg';
import typescriptIcon from '../../assets/tech-icons/typescript-programming-language-icon.svg';
import vscodeIcon from '../../assets/tech-icons/visual-studio-code-icon.svg';
import vueIcon from '../../assets/tech-icons/vue-js-icon.svg';
import webpackIcon from '../../assets/tech-icons/webpack-icon.svg';

// The complete array of icons, organized for readability
const techIcons = [
	// Frontend Languages & Frameworks
	htmlIcon,
	cssIcon,
	javascriptIcon,
	typescriptIcon,
	reactIcon,
	angularIcon,
	vueIcon,
	nextjsIcon,
	nuxtjsIcon,
	reduxIcon,
	sassIcon,
	tailwindIcon,
	bootstrapIcon,
	// Backend Languages & Frameworks
	nodejsIcon,
	pythonIcon,
	expressIcon,
	nestjsIcon,
	djangoIcon,
	flaskIcon,
	fastapiIcon,
	// Mobile
	flutterIcon,
	dartIcon,
	// Databases
	mongodbIcon,
	mysqlIcon,
	postgresqlIcon,
	mariadbIcon,
	redisIcon,
	// DevOps & Tools
	gitIcon,
	githubIcon,
	dockerIcon,
	webpackIcon,
	bashIcon,
	linuxIcon,
	// Other Tools
	postmanIcon,
	vscodeIcon,
	copilotIcon,
	cIcon,
	jestIcon,
	claudeIcon,
	firebaseIcon,
];

const TechMarquee = () => {
	return (
		<div className={styles.marquee}>
			<div className={styles.track}>
				{/* We render the full list of icons twice for the seamless loop */}
				{[...techIcons, ...techIcons].map((icon, index) => (
					<img
						key={index}
						src={icon}
						alt={`Tech icon ${index + 1}`}
						className={styles.icon}
					/>
				))}
			</div>
		</div>
	);
};

export default TechMarquee;
