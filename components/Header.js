import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.header_nav_container}>
				<Link href='/'>
					<a className={styles.header_nav_link}>Home</a>
				</Link>
				<Link href='/about'>
					<a className={styles.header_nav_link}>About</a>
				</Link>
				<Link href='/portfolio'>
					<a className={styles.header_nav_link}>Portfolio</a>
				</Link>
				<Link href='/contact'>
					<a className={styles.header_nav_link}>Contact</a>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
