import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from '../styles/About.module.scss';
import { FaHtml5, FaCss3, FaBootstrap, FaGithub, FaSass } from 'react-icons/fa';
import {
	SiJavascript,
	SiReact,
	SiJquery,
	SiNextdotjs,
	SiNodedotjs,
	SiExpress,
} from 'react-icons/si';

const About = () => {
	return (
		<>
			<Head>
				<title>About Page</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main className={styles.main}>
				<section className={styles.section_one}>
					<div className={styles.section_container}>
						<div className={styles.section_one_image_container}>
							<Image
								priority
								className={styles.section_one_image}
								src='/images/about/profile-color.jpg'
								alt='Mark Rose smiling in color'
								layout='fill'
							/>
						</div>
						<div className={styles.section_one_text_container}>
							<h1>Hi, I&apos;m Mark</h1>
							<p>
								My name is Mark Rose. I am a web developer and a personal
								trainer. I gravitated towards the front end side of the
								development world. Working with React JS and developing fully
								responsive apps and websites
							</p>
							<p>
								As a front end developer my aim is to develop my projects to be
								not only eye catching but to be seen on multiple platforms
								whether that is a phone or desktop. Whatever your vision is for
								a startup, small business or a personal blog, I will deliver a
								beautiful personal work of art.
							</p>
							<p>
								Most days I am on the computer but when I am not typing away on
								the keyboard yu can find me working out or drawing on my sketch
								pad.
							</p>
						</div>
					</div>
				</section>

				<section className={styles.section_two}>
					<div className={styles.section_container}>
						<h2>My Skill Set</h2>
						<div className={styles.language_logo_container}>
							<p>
								<FaHtml5 />
							</p>
							<p>
								<FaCss3 />
							</p>
							<p>
								<FaSass />
							</p>
							<p>
								<FaBootstrap />
							</p>
							<p>
								<SiJavascript />
							</p>
							<p>
								<SiJquery />
							</p>
							<p>
								<SiReact />
							</p>
							<p>
								<SiExpress />
							</p>
							<p>
								<SiNextdotjs />
							</p>
							<p>
								<SiNodedotjs />
							</p>
							<p>
								<FaGithub />
							</p>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default About;
