import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Work.module.css";
import utilStyles from "../../styles/utils.module.css";
import Nav from "../../components/Nav/Nav";
import Image from "next/image";
import Info from "../../components/Info/Info";
import ScrollTracker from "../../components/ScrollTracker/ScrollTracker";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { useRef } from "react";
import { projectsData } from "../data";

export default function Work() {
	const scrollRef = useRef(null);

	// console.log(projectsData.map(p => p.heading))
	const projectCards = projectsData.map(data => {
		const {heading, subHeading, descriptionHeading, description, images, parallaxImage} = data

		return <section className={styles.project}>
						<div className={styles.parrallax} style={{ backgroundImage: `url(${parallaxImage})`}}></div>
						<div className={styles.projectCard}>
							<div className={styles.projectTitle}>
								<h2>{heading}</h2>
								<p>{subHeading}</p>
							</div>
							<Image
								className={styles.mainProjectImg}
								src={images[0]}
								height={400}
								width={350}
								alt='Silk and sense logo'
								priority
							></Image>

							<div className={styles.projectDescription}>
								<h3>{descriptionHeading}</h3>
								<p>
									{description[0]}
								</p>
								<p>
									{description[1]}
								</p>
							</div>
							<Image
								className={styles.projectImg}
								src={images[1]}
								height={400}
								width={350}
								alt='Silk and sense submark logo'
							></Image>
							<Image
								className={styles.projectImg}
								src={images[2]}
								height={400}
								width={350}
								alt='Silk and sense logo on a badge'
							></Image>
						</div>
					</section>

	})

	return (
		<>
			<Head>
				<title>Work</title>
			</Head>

			<div className={`${styles.theme}`}>
				<header className={styles.header}>
					<Nav />
					<ScrollTracker />
				</header>

				<ScrollToTop pageTop={scrollRef} />
				<main className={`${styles.projectContainer} `} ref={scrollRef}>
					<h2 className={styles.mainTitle}>Featured work</h2>

					{projectCards}

					{/* <section className={styles.project}>
						<div className={styles.parrallax}></div>
						<div className={styles.projectCard}>
							<div className={styles.projectTitle}>
								<h2>Silk &amp; Sense</h2>
								<p>Art Direction and Branding</p>
							</div>
							<Image
								className={styles.mainProjectImg}
								src='/silk/silk.png'
								height={400}
								width={350}
								alt='Silk and sense logo'
								priority
							></Image>

							<div className={styles.projectDescription}>
								<h3>Premium Brand Specialised In Artisanal Handmade Scarves</h3>
								<p>
									The branch on the logo symbolises the family, a mother who
									started the business (the truck) and the daughter that put
									that vision into reality (the shoots) The thin lines, the
									light, neutral colours and the typography define the minimal,
									feminine and delicate and delicate personality of each scarf
								</p>
							</div>
							<Image
								className={styles.projectImg}
								src='/silk/silk_logo.png'
								height={400}
								width={350}
								alt='Silk and sense submark logo'
							></Image>
							<Image
								className={styles.projectImg}
								src='/silk/silk_mockup.png'
								height={400}
								width={350}
								alt='Silk and sense logo on a badge'
							></Image>
						</div>
					</section>

					<div className={styles.parrallax}></div>
					<section className={`${styles.projectCard} ${styles.invert}`}>
						<div className={styles.projectTitle}>
							<h2>Moane</h2>
							<p>Art Direction and Branding</p>
						</div>
						<Image
							className={styles.mainProjectImg}
							src='/moane/colours_artboard.png'
							height={400}
							width={350}
							alt='Moane logo'
						></Image>

						<div className={styles.projectDescription}>
							<h3>Interior Design inspired by nature</h3>
							<p>
								Moane, a Bali-based interior design studio. Their philosophy is
								rooted in the belief that the natural beauty and power of
								Bali&apos;s volcanic terrain can be translated into elegant and
								timeless design elements
							</p>
							<p>
								For this project we created a typography that is a
								representation of their Bali Inspiration, with elegant lines
								that reflects volcanic landscapes.
							</p>
						</div>
						<Image
							className={styles.projectImg}
							src='/moane/moane.png'
							height={400}
							width={350}
							alt='Moane business card'
						></Image>
						<Image
							className={styles.projectImg}
							src='/moane/mockup.png'
							height={400}
							width={350}
							alt='Moane submark logo'
						></Image>
					</section>

					<div className={styles.parrallax}></div>
					<section className={styles.projectCard}>
						<div className={styles.projectTitle}>
							<h2 className={styles.projectTitle}>Fresh &amp; Kind</h2>
							<p>Art Direction and packaging</p>
						</div>
						<Image
							className={styles.mainProjectImg}
							src='/fresh/fresh_kind.png'
							height={400}
							width={350}
							alt='fresh and kind logo'
						></Image>

						<div className={styles.projectDescription}>
							<h3>Ethical Hair Care</h3>
							<p>
								Fresh + Kind is a haircare brand that has a vision of bringing
								and organic, nurturing and unique shampoo range to those who
								care about the planet without compromising on product quality.
							</p>
							<p>
								The brand was seeking a visual identity system that communicates
								the nature, the waves, their natural vibe but with a minimalist
								and modern approach. With lots of negative space, a doble line
								in the typography reflecting the double purpose of the brand and
								the icon with waves simulating the hair we created a modern,
								minimal, clean but relaxed brand.
							</p>
						</div>
						<Image
							className={styles.projectImg}
							src='/fresh/fresh_package.png'
							height={400}
							width={350}
							alt='fresh and kind logo on packaging'
						></Image>
						<Image
							className={styles.projectImg}
							src='/fresh/business_card.png'
							height={400}
							width={350}
							alt='fresh and kind business card'
						></Image>
					</section> */}
					<footer className={styles.pageLinks}>
						<Info />
					</footer>
				</main>
			</div>
		</>
	);
}
