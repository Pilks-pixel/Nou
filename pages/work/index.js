import Head from "next/head"
import Link from 'next/link'
import styles from '../../styles/Work.module.css'


export default function Work() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Work</title>
            </Head>
            <main>
                <h1>This is the work page</h1>
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