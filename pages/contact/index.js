import Head from "next/head"
import Link from 'next/link'
import styles from '../../styles/Contact.module.css'



export default function Contact() {

    return(
    <div className={styles.container}>
        <Head>
        <title>Contact</title>
      </Head>
      <main>
        <h1>This is the contact page</h1>
        <Link href='/'>
            <a>Home</a>
        </Link>
        <section>
          <p>Example text about us</p>
        </section>


      </main>
      <footer>

      </footer>


    </div>
    )
}