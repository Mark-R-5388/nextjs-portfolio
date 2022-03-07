import Head from 'next/head';
import Header from '../components/Header.js';
import ProjectCard from '../components/ProjectCard.js';
import Footer from '../components/Footer.js';
import styles from '../styles/Portfolio.module.scss';

const Portfolio = () => {
	return (
		<>
			<Head>
				<title>Portfolio Page</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main className={styles.main}>
				<h1>Portfolio</h1>
				<section className={styles.portfolio_section}>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</section>
			</main>

			<Footer />
		</>
	);
};

export default Portfolio;
