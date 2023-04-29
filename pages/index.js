import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import {
	Nav,
	Service,
	ServiceGrid,
	Featured,
	Info,
	ScrollTracker,
	ScrollToTop,
} from "../components/index";
import Favicon from "../components/Favicon/Favicon";
import { useRef } from "react";

export default function Home() {
	const scrollRef = useRef(null);

	return (
		<>
			<Head>
				<title>Nou Design Studio</title>
				<meta name='Nou design studio' content='Nou homepage' />
				<Favicon />
			</Head>

			<>
				<header className={styles.header}>
					<Nav />
					<ScrollTracker />
				</header>

				<ScrollToTop pageTop={scrollRef} />
				<main className={styles.main} ref={scrollRef}>
					<section className={styles.hero}>
						<div className={styles.mainTitle}>
							<h1>brand &amp; web design studio</h1>
						</div>
						<span className={styles.subHeading}>
							Inspired by Minimalism and fascinated by technology, we craft
							brands and websites that elevate and up level your business
						</span>
						<div className={utilStyles.pageLink}>
							<Link href={"/contact"} className={styles.contactLink}>
								Say Hello
							</Link>
						</div>
					</section>
				</main>

				<section className={styles.projects}>
					<div className={styles.banner}>
						<h3 className={styles.bannerText}>
							your business needs memorable branding
						</h3>
					</div>
					<h3 className={`${utilStyles.sectionTitle} ${styles.projectsTitle}`}>
						featured work
					</h3>
					<div className={styles.slider}>
						<Featured />
					</div>
					<Link
						href='/work'
						className={`${utilStyles.pageLink} ${styles.projectsLink}`}
					>
						All Projects
					</Link>
				</section>

				<section className={styles.servicesContainer}>
					<div className={styles.mobile}>
						<Service />
					</div>
					<div className={styles.desktop}>
						<ServiceGrid />
					</div>
				</section>

				<section className={styles.contactContainer}>
					<div className={styles.topInnerContactContainer}>
						<h3 className={styles.darkGreyBoxContent}>Get in contact</h3>
					</div>

					<div className={styles.darkGreyBox}></div>
					<div className={styles.bottomInnerContactContainer}>
						<p>Are you ready to take your business to the next level?</p>
						<p>
							Are you ready to take your business to the next level? Please fill
							out the form below so we can get an idea of your project needs.
							Please allow 2 business days to hear back from us
						</p>
						<Link href='/contact' className={utilStyles.pageLink}>
							Let&#39;s Begin
						</Link>
					</div>
				</section>
			</>

			<footer>
				<Info />
			</footer>
		</>
	);
}
