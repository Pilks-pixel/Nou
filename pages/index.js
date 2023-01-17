import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Nav from '../components/Nav'




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        
        <title>Nou Design Studio</title>
        <meta name="Nou design studio" content="Nou homepage" />
        
      </Head>
      <header className={styles.header}>
        <div className={styles.logoImage}>
          <Image src='/asset1.svg' alt='nou logo' width={150} height={50} layout="responsive"/>
        </div>

        {/* <Nav /> */}
      </header>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.mainTitle}>brand & web design studio</h1>
          <span className={styles.subHeading}>Inspired by Minimalism and fascinated by technology, we craft brands and websites that elevate and up level your business</span>

        </div>            

        <section>
          <div className={styles.banner}>
            <h3>your business needs memorable</h3>
          </div>

        </section>
         
      </main>

      <footer className={styles.footer}>
      <a href='https://www.instagram.com/noudesign.studio/' target="_blank" className={styles.social}>
            <Image 
            src='/icons8-instagram-50.png' 
            alt='instagram link' 
            width={40} height={40} 
            className={styles.social}
            />
          </a>
      </footer>
    </div>
  )
}
