import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import styles from "./info.module.css";
import Image from "next/legacy/image";

const Info = () => {
  
	return (
		<div className={styles.footer}>
			<div className={styles.footerLinksContainer}>
				<div className={styles.logoContainer}>
					<div className={styles.logoImg}>
						<Image
							src='/noufiles_15.png'
							alt='nou logo'
							width={400}
							height={120}
							layout='responsive'
						/>
					</div>
					<span className={styles.logoSubTitle}>Based in London / Spain</span>
					<span className={styles.logoSubTitle}>Partnering worldwide</span>
				</div>

				<div className={styles.footerLink}>
					<h5 className={styles.footerLinkTitle}>Connect</h5>
					<a href='https://www.instagram.com/noudesign.studio/' target='_blank' rel="noreferrer">
						instagram
					</a>
					<a href='https://www.pinterest.co.uk/HortenLlorens/' target='_blank' rel="noreferrer">
						pintrest
					</a>
					<a href='https://www.behance.net/hortenllorens' target='_blank' rel="noreferrer">
						behance
					</a>
				</div>

				<div className={styles.footerLink}>
					<h5 className={styles.footerLinkTitle}>Quick Links</h5>
					<Link href='/'>home</Link>
					<Link href='/work'>projects</Link>
					<Link href='/about'>about</Link>
					<Link href='/contact'>contact</Link>
				</div>

				<div className={styles.footerLink}>
					<h5 className={styles.footerLinkTitle}>Legal</h5>
					<span>Q & A</span>
					<span>Our Process</span>
					<span>Policies</span>
					<span>Terms & Conditions</span>
				</div>
			</div>
			<p className={styles.copyright}>
				Copyright Nou Design Studio 2022. Designed by Nou Design Studio.
			</p>
		</div>
	);
};

export default Info;
