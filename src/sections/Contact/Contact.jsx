import React, { useState, useRef } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
	const cardRef = useRef(null);
	const [style, setStyle] = useState({});
	const [hoveredLink, setHoveredLink] = useState(null);

	const handleMouseMove = (e) => {
		const card = cardRef.current;
		if (!card) return;

		const { width, height, left, top } = card.getBoundingClientRect();
		const x = e.clientX - left;
		const y = e.clientY - top;

		const rotateX = -(y / height - 0.5) * 15;
		const rotateY = (x / width - 0.5) * 15;

		setStyle({
			transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
		});
	};

	const handleMouseLeave = () => {
		setStyle({
			transform:
				'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
		});
	};

	return (
		<section id='contact' className={styles.container}>
			<h2 className={styles.title}>Let's Connect</h2>
			<div
				className={styles.card}
				ref={cardRef}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={style}
			>
				{/* This new div wraps all content to separate it from the border */}
				<div className={styles.cardContent}>
					<div className={styles.cardHeader}>
						<div className={styles.logo}>KJ</div>
						<div className={styles.headerText}>
							<h3>Khaled Jallouli</h3>
							<p>Full Stack Developer</p>
						</div>
					</div>
					<div className={styles.divider}></div>
					<div className={styles.cardBody}>
						<a
							href='mailto:khaledjalloulidev@gmail.com'
							className={styles.contactRow}
							onMouseEnter={() => setHoveredLink('email')}
							onMouseLeave={() => setHoveredLink(null)}
						>
							<svg width='24' height='24' viewBox='0 0 24 24'>
								<path d='M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z' />
							</svg>
							<span>
								{hoveredLink === 'email'
									? 'khaledjalloulidev@gmail.com'
									: 'Email'}
							</span>
						</a>
						<a href='tel:+21654353910' className={styles.contactRow}>
							<svg width='24' height='24' viewBox='0 0 24 24'>
								<path d='M19.232 14.689c-1.44-.606-2.88-1.21-4.32-1.815-.503-.212-1.063-.14-1.503.149l-1.636 1.09c-2.392-1.144-4.333-3.083-5.477-5.476l1.09-1.636c.288-.44.359-1 .148-1.503-.605-1.44-1.21-2.88-1.815-4.32-.266-.633-.865-1.026-1.532-1.026h-2.903c-.802 0-1.472.585-1.604 1.368-.213 1.275.037 2.611.53 3.923.493 1.313 1.24 2.585 2.242 3.805 1.742 2.106 3.935 3.931 6.425 5.312 1.282.712 2.618 1.18 3.932 1.388.795.124 1.549-.441 1.549-1.258v-2.903c0-.667-.393-1.266-1.026-1.532z' />
							</svg>
							<span>+216 54 353 910</span>
						</a>
						<a
							href='https://www.linkedin.com/in/khaled-jallouli-756272329/'
							target='_blank'
							rel='noopener noreferrer'
							className={styles.contactRow}
							onMouseEnter={() => setHoveredLink('linkedin')}
							onMouseLeave={() => setHoveredLink(null)}
						>
							<svg width='24' height='24' viewBox='0 0 24 24'>
								<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
							</svg>
							<span>
								{hoveredLink === 'linkedin'
									? 'linkedin.com/in/khaledjallouli'
									: 'LinkedIn'}
							</span>
						</a>
						<a
							href='https://github.com/Khaled-J7'
							target='_blank'
							rel='noopener noreferrer'
							className={styles.contactRow}
							onMouseEnter={() => setHoveredLink('github')}
							onMouseLeave={() => setHoveredLink(null)}
						>
							<svg width='24' height='24' viewBox='0 0 24 24'>
								<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
							</svg>
							<span>
								{hoveredLink === 'github' ? 'github.com/Khaled-J7' : 'GitHub'}
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
