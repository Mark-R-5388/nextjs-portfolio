import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Home() {
	return (
		<>
			<Head>
				<title>Home Page</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<main className={styles.main}>
				<div className={styles.content_container}>
					<div className={styles.image_container}>
						<Image
							priority
							className={styles.image}
							src='/images/homepage/profile-black-and-white.jpg'
							alt='myself smiling'
							layout='fill'
						/>
					</div>
					<div className={styles.text_container}>
						<h1>Mark Rose</h1>
						<h2>Web Developer</h2>
						<div className={styles.social_icons_container}>
							<Link href='https://github.com/Mark-R-5388'>
								<a target='_blank' className={styles.social_icon}>
									<FaGithub />
								</a>
							</Link>
							<Link href='https://www.linkedin.com/in/mark-rose-600171195/'>
								<a target='_blank' className={styles.social_icon}>
									<FaLinkedin />
								</a>
							</Link>

							<Link href='https://twitter.com/mark_web_dev'>
								<a target='_blank' className={styles.social_icon}>
									<FaTwitter />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
