import Link from 'next/link'
import styles from './nav.module.css'

export default function Nav() {

    return(
        <>
    
        <nav className={styles.nav}>
          <ul className={styles.container}>
            <li>
              <Link href='/services'>
                <a>services</a>
              </Link>
            </li>
            <li>
              <Link href='/work'>
                <a>work</a>

              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>contact</a>

              </Link>
            </li>
          </ul>
        </nav>
        </>
    )
}