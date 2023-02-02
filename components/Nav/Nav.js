import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import { useState } from "react";


export default function Nav() {

const [mobileNav ,setMobileNav] = useState(false);

const handleClick = () => {
  setMobileNav(prevMobile => !prevMobile)
  console.log({mobileNav})
}

	return (
		<>
			<nav className={styles.containerNav}>
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

				<button 
        className={styles.mobileNavToggle}
        aria-controls='navPrimary' 
        aria-expanded={mobileNav}
        onClick={handleClick}
        >
					<span className={styles.srOnly}>Menu</span>
				</button>

				<ul className={ mobileNav? styles.navPrimary : `${styles.navPrimary} ${styles.navPrimaryHidden}`}>
					<li>
						<Link href='/' onClick={handleClick} >home</Link>
					</li>
					<li>
						<Link href='/services'>about</Link>
					</li>
					<li>
						<Link href='/work'>projects</Link>
					</li>
					<li>
						<Link href='/contact'>contact</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
