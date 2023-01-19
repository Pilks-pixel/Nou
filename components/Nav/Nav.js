import Link from 'next/link'
import styles from './nav.module.css'

export default function Nav() {

    return <>

    <nav className={styles.nav}>
      <ul className={styles.container}>
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