import Head from "next/head";
import Image from "next/legacy/image";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Nav from "../components/Nav/Nav";
import Featured from "../components/featured/featured";
  

export default function Home() {

	return (
		<div className={utilStyles.container}>
			<Head>
				<title>Nou Design Studio</title>
				<meta name='Nou design studio' content='Nou homepage' />
			</Head>

			<header className={styles.header}>
				<Image
					src='/asset1.svg'
					alt='nou logo'
					width={75}
					height={18}
					layout='intrinsic'
				/>
				{/* <Nav /> */}
			</header>

			<main className={styles.main}>
				<section className={styles.hero}>
					<div className={styles.mainTitle}>
						<h1>brand & web design studio</h1>
					</div>
					<span className={styles.subHeading}>
						Inspired by Minimalism and fascinated by technology, we craft brands
						and websites that elevate and up level your business
					</span>
					<div className={utilStyles.btn}>
						<span>Work with us</span>
					</div>
				</section>
			</main>

			<section>
				<div className={styles.banner}>
					<h3>your business needs memorable branding</h3>
				</div>
			</section>
			<Featured />

			<footer className={styles.footer}>
				<a
					href='https://www.instagram.com/noudesign.studio/'
					target='_blank'
					className={styles.social}
				>
					<Image
						src='/icons8-instagram-50.png'
						alt='instagram link'
						width={40}
						height={40}
						className={styles.social}
					/>
				</a>
			</footer>
		</div>
	);
}
