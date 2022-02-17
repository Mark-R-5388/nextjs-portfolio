import Link from 'next/link';
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_container}>
				<p className={styles.footer_text}>
					Mark Rose Web Developer &copy; 2022
				</p>
				<div className={styles.footer_contact_container}>
					<div className={styles.footer_contact_email_container}>
						<p className={styles.footer_contact_email}>
							markrose@markwebdev.com
						</p>
					</div>
					<div className={styles.footer_contact_social_container}>
						<Link href='https://github.com'>
							<a className={styles.footer_social_link}>
								<BsGithub />
							</a>
						</Link>
						<Link href='https://linkdn.com'>
							<a className={styles.footer_social_link}>
								<BsLinkedin />
							</a>
						</Link>
						<Link href='https://twitter.com'>
							<a className={styles.footer_social_link}>
								<BsTwitter />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
