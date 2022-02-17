import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav_container}>
        <Link href="/">
          <a className={styles.nav_link}>Home</a>
        </Link>
        <Link href="/about">
          <a className={styles.nav_link}>About</a>
        </Link>
        <Link href="/portfolio">
          <a className={styles.nav_link}>Portfolio</a>
        </Link>
        <Link href="/contact">
          <a className={styles.nav_link}>Contact</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
