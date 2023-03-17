import Head from "next/head";
import Link from "next/link";
import Featured from "../../components/featured/featured";
import styles from "../../styles/Work.module.css";
import utilStyles from "../../styles/utils.module.css";
import Nav from "../../components/Nav/Nav";
import Image from "next/image";

export default function Work() {
	return (
		<div className={`${utilStyles.container} ${styles.theme}`}>
			<Head>
				<title>Work</title>
			</Head>

			<header>
				<Nav />
			</header>

			<main className={styles.projectContainer}>
				<h2 className={styles.mainTitle}>Featured work</h2>
				<mainion className={styles.projectCard}>
					<h2 className={styles.projectTitle}>Silk & Sense</h2>
					<p>Art Direction and Branding</p>
					<Image
						className={styles.projectImg}
						src='/silk/silk.png'
						height={400}
						width={350}
						alt='Silk and sense logo'
					></Image>
					<h3>Premium Brand Specialised In Artisanal Handmade Scarves</h3>
					<p>
						The branch on the logo symbolises the family, a mother who started
						the business (the truck) and the daughter that put that vision into
						reality (the shoots) The thin lines, the light, neutral colours and
						the typography define the minimal, feminine and delicate and
						delicate personality of each scarf
					</p>
					<div className={styles.projectImgContainer}>
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
					</div>s				</mainion>

				<mainion className={styles.projectCard}>
					<h2 className={styles.projectTitle}>Moane</h2>
					<p>Art Direction and Branding</p>
					<Image
						className={styles.projectImg}
						src='/moane/colours_artboard.png'
						height={400}
						width={350}
						alt='Moane logo'
					></Image>
					<p>
						Moane is a Interior Design Studio, specialised in comfortable ,
						stylish interiors that represents the beauty of the island of Bali
					</p>
					<div className={styles.projectImgContainer}>
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
					</div>s				</mainion>

				<section className={styles.projectCard}>
					<h2 className={styles.projectTitle}>Fresh & Kind</h2>
					<p>Art Direction and packaging</p>
					<Image
						className={styles.projectImg}
						src='/fresh/fresh_logo.png'
						height={400}
						width={350}
						alt='fresh and kind logo'
					></Image>
					<p>
						FRESH + KIND is a haircare brand that has a vision of bringing and
						organic, vegan and natural shampoo range to those who care about the
						planet without compromising on product quality.
					</p>
					<div className={styles.projectImgContainer}>
						<Image
							className={styles.projectImg}
							src='/fresh/mockup2.jpeg'
							height={400}
							width={350}
							alt='fresh and kind logo on smartphone'
						></Image>
						<Image
							className={styles.projectImg}
							src='/fresh/business_card.jpeg'
							height={400}
							width={350}
							alt='fresh and kind business card'
						></Image>
					</div>
				</section>
			</main>
			<footer></footer>
		</div>
	);
}
