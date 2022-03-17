import styles from './ProjectCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { BsLink45Deg } from 'react-icons/bs';

const ProjectCard = ({ image, title, languages, githubLink, websiteLink }) => {
	return (
		<div className={styles.card_container}>
			<div className={styles.card_image_container}>
				<Image
					className={styles.card_image}
					src={image}
					alt={title}
					layout='fill'
				/>
			</div>
			<div className={styles.card_content_container}>
				<h3>{title}</h3>
				<p>Languages Used</p>
				<small>{languages}</small>
				<div className={styles.card_links_container}>
					<Link href={githubLink}>
						<a className={styles.card_link}>
							<FaGithub />
						</a>
					</Link>
					<Link href={websiteLink}>
						<a className={styles.card_link}>
							<BsLink45Deg />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
