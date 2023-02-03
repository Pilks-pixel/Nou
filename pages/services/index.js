import Head from "next/head"
import Link from 'next/link'
import styles from '../../styles/Services.module.css'
import Nav from "../../components/Nav/Nav";


export default function Services() {

    return (
      <div className={styles.container}>
      <Head>
      <title>Services</title>
    </Head>

      <header>
				<Nav />
		  </header>

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