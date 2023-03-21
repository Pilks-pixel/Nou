import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Nav from "../components/Nav/Nav";
import Service from "../components/Service/Service";
import Featured from "../components/Featured/Featured";
import Info from "../components/Info/Info";
import ServiceGrid from "../components/ServiceGrid/ServiceGrid";
import { useEffect, useState, useRef} from "react";
import Favicon from "../components/Favicon/Favicon";

export default function Home() {

	// const [scrollPosition, setScrollPosition] = useState(0);
	// const ref = useRef(null);

	

	// console.log({scrollPosition})

	// const progressKeyFrame = [
	// 	{width: '0'},
	// 	{width: `${scrollPosition}`}
	// ]

	// const progressTiming = {
	// 	duration: 3000,
	// 	iterations: 1,
	// 	fill: 'forwards',
    // 	easing: 'linear',
	// 	// delay: scrollPosition * -1000,

	//   }

	// const handleScroll = () => {
	// 	// const position = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
	// 	const position = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)) * 100
	// 	setScrollPosition(position);			
	// };

	// useEffect(()=> {

	// 	ref.current.animate(progressKeyFrame, progressTiming)
	// 	window.addEventListener('scroll', handleScroll, { passive: true });
		
	// 	console.log(ref.current)

    // 	return () => {
    //     window.removeEventListener('scroll', handleScroll);
    // };

	// },[])


	
	return (
		<div className={utilStyles.container}>
			<Head>
				<title>Nou Design Studio</title>
				<meta name='Nou design studio' content='Nou homepage' />
				<Favicon />
			</Head>

			<header>
				<Nav />
			</header>
  				{/* animation-delay: calc(var(--scroll) * -1s); */}
				{/* <div className={styles.scrollTracker} ref={ref}></div> */}

			<main className={styles.main}>
				<section className={styles.hero}>
					<div className={styles.mainTitle}>
						<h1>brand &amp; web design studio</h1>
					</div>
					<span className={styles.subHeading}>
						Inspired by Minimalism and fascinated by technology, we craft brands
						and websites that elevate and up level your business
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
					<h3 className={styles.bannerText}>your business needs memorable branding</h3>
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

			<footer className={utilStyles.container}>
				<Info />
			</footer>
		</div>
	);
}
