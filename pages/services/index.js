import Head from "next/head"
import Link from 'next/link'
import styles from '../../styles/Services.module.css'


export default function Services() {

    return (
      <div className={styles.container}>
      <Head>
      <title>Services</title>
    </Head>
    <main>
      <h1>This is the services page</h1>
      <Link href='/'>
          Home
      </Link>
      <section>
        <p>Example text about us</p>
      </section>

    </main>
    <footer>
        
    </footer>
      </div>
    );
}