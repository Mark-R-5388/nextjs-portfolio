import Link from "next/link";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Mark Rose Web Developer &copy; 2022</p>
        <div className={styles.contact_container}>
          <p className={styles.contact_email}>markrose@markwebdev.com</p>

          <div className={styles.contact_social_container}>
            <Link href="https://github.com">
              <a className={styles.social_link}>
                <BsGithub />
              </a>
            </Link>
            <Link href="https://linkdn.com">
              <a className={styles.social_link}>
                <BsLinkedin />
              </a>
            </Link>
            <Link href="https://twitter.com">
              <a className={styles.social_link}>
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
