import Head from "next/head"
import Link from 'next/link'
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css"
import Nav from "../../components/Nav/Nav";


export default function About() {
  
    return (
        <div className={utilStyles.container}>
        <Head>
        <title>About</title>
        
        </Head>

      <header>
				<Nav />
			</header>

      <main>
        <h2>About me</h2>
        <Image
        className=""
        src='/about_me.png'
        height={400}
        width={350}
        >

        </Image>
        <section>
          <p>Example text about us</p>
        </section>


      </main>
      <footer>

      </footer>


    </div>
  );
  
}
