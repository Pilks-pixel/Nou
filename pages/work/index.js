import Head from "next/head"
import Link from 'next/link'
import Featured from "../../components/featured/featured";
import styles from '../../styles/Work.module.css'
import Nav from "../../components/Nav/Nav";


export default function Work() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Work</title>
            </Head>

            <header>
				<Nav />
			</header>

            <main>
               
                <section>
                    <p>Example text about us</p>
                    <Featured />
                </section>


            </main>
            <footer>
                
            </footer>

        </div>
    );
}