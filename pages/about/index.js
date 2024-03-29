import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/About.module.css";
import { Nav, Info } from "../../components/index";
import profilePic from '../../public/about_me.png'



export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>

			<div className={`${utilStyles.container} ${styles.theme}`}>
				<header>
					<Nav />
				</header>

				<main className={styles.mainContainer}>
					<div className={styles.aboutContainer}>
						<h2 className={styles.title}>About me</h2>

						<Image
							className={styles.aboutImg}
							src={profilePic}
							placeholder="blur"
							alt='Picture of Horten, Nou Design Founder'
							priority={true}
						></Image>

						<section className={styles.aboutInfo}>
							<p>
								Hey there, I am Horten, a visual designer specialised in
								minimalism Branding &amp; Web Design
							</p>

							<p>
								I believe in creating Visual Designs with purpose, that are
								timeless &amp; unique.
							</p>

							<p>She / Her • proud Spanish / British</p>

							<Link
								href='/contact'
								style={{
									textDecoration: "underline",
								}}
							>
								Say Hello
							</Link>
						</section>
					</div>

					<footer>
						<Info />
					</footer>
				</main>
			</div>
		</>
	);
}
