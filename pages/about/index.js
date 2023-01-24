import Head from "next/head"
import Link from 'next/link'
import utilStyles from "../../styles/utils.module.css"

export default function About() {
  
    return (
        <div className={utilStyles.container}>
        <Head>
        <title>About</title>
      </Head>
      <main>
        <h1>This is the about page</h1>
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
