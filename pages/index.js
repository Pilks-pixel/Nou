import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Nav from "../components/Nav/Nav";
import Service from "../components/Service/Service";
import Featured from "../components/featured/featured";
import Info from "../components/Info/Info";
  

export default function Home() {

	return (
		<div className={utilStyles.container}>
			<Head>
				<title>Nou Design Studio</title>
				<meta name='Nou design studio' content='Nou homepage' />
			</Head>

			<header className={styles.header}>
				<Image
					src='/noufiles_15.png'
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
					<div className={utilStyles.pageLink}>
						<Link href={'/contact'} className={styles.contactLink}>Say Hello</Link>
					</div>
				</section>
			</main>

			<section id='projects'>
				<div className={styles.banner}>
					<h3>your business needs memorable branding</h3>
				</div>
			  <Featured />
        <Link href='/work' className={utilStyles.pageLink} >All Projects</Link>
			</section>

      <section className={styles.servicesContainer}>
        <Service />
      </section>

      <section className={styles.contactContainer}>
        <div className={styles.topInnerContactContainer}>
          <h3 className={styles.darkGreyBoxContent}>Get in contact</h3>
        </div>

        <div className={styles.darkGreyBox}></div>
        <div className={styles.bottomInnerContactContainer}>
          <p>Are you ready to take your business to the next level?</p>
          <p>Are you ready to take your business to the next level?
             Please fill out the form below so we can get an idea of your project needs. 
             Please allow 2 business days to hear back from us
          </p>
        <Link href='/services' className={utilStyles.pageLink} >Let's Begin</Link>
        </div>

      </section>

			<footer className={utilStyles.container}>
        <Info />
			</footer>
		</div>
	);
}
