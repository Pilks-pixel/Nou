import Link from 'next/link'
import Image from 'next/image';
import styles from './nav.module.css'

export default function Nav() {

    return <>

    <nav className={styles.nav}>
      <Image
        className={styles.logo}
        src='/noufiles_large.png'
        alt='nou logo'
        width={260}
        height={150}
        // style={{
        //   maxwidth: "200px",
        //   height: "auto",}}
       />

       <button><span className='srOnly'>Menu</span></button>
      <ul className={styles.containerPrimary}>
        <li> 
          <Link href='/services'>
            services
          </Link>
        </li>
        <li>
          <Link href='/work'>
            work

          </Link>
        </li>
        <li>
          <Link href='/contact'>
            contact

          </Link>
        </li>
      </ul>
    </nav>
    </>;
}