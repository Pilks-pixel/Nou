import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import Nav from "../../components/Nav/Nav";
import Info from "../../components/Info/Info";
import styles from "../../styles/About.module.css";

export default function About() {

	return (
		<div className={utilStyles.container}>
			<Head>
				<title>About</title>
			</Head>

			<header>
				<Nav />
			</header>

			<main className={`${utilStyles.container} ${styles.theme}`}>
				<div className={styles.aboutContainer}>
					<h2 className={styles.title}>About me</h2>

					<Image
						className={styles.aboutImg}
						src='/about_me.png'
						height={400}
						width={350}
						alt='Picture of Horten, Nou Design Founder'
					></Image>

					<section className={styles.aboutInfo}>
						<p>
							Hey there, I am Horten, a visual designer specialised in
							minimalism Branding & Web Design
						</p>

						<p>
							I believe in creating Visual Designs with purpose, that are
							timeless &
						</p>

						<p>She / Her • proud Spanish / British</p>

						<Link
							href='/contact'
							style={{
								"text-decoration": "underline",
							}}
						>
							Say Hello
						</Link>
					</section>
				</div>
			</main>
      
			<footer className={utilStyles.container}>
				<Info />
			</footer>
		</div>
	);
}
