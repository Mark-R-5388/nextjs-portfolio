import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import styles from '../styles/Contact.module.scss';

const Contact = () => {
	return (
		<>
			<Head>
				<title>About Page</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main className={styles.main}>
				<div className={styles.section_container}>
					<h1>Contact Me</h1>
					<div className={styles.contact_container}>
						<div className={styles.contact_text_container}>
							<h2>Reach out below to collaborate and work with me!</h2>
							<h4>marose5388@gmail.com</h4>
						</div>

						<div className={styles.contact_social_container}>
							<Link href='https://github.com/Mark-R-5388'>
								<a target='_blank' className={styles.social_icon}>
									<FaGithub />
								</a>
							</Link>
							<Link href='https://www.linkedin.com/in/mark-rose-it/'>
								<a target='_blank' className={styles.social_icon}>
									<FaLinkedin />
								</a>
							</Link>

						</div>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
};

export default Contact;
