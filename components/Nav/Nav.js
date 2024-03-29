import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const Nav = () => {
	const [mobileNav, setMobileNav] = useState(false);
	const router = useRouter();

	const handleClick = () => {
		setMobileNav(prevMobile => !prevMobile);
	};

	return (
		<>
			<nav className={styles.containerNav}>
				<Image
					className={styles.logo}
					src='/noufiles_large.png'
					alt='nou logo'
					width={260}
					height={150}
				/>

				<button
					className={styles.mobileNavToggle}
					aria-controls='navPrimary'
					aria-expanded={mobileNav}
					aria-label='nav button mobile'
					onClick={handleClick}
				>
					<span className={styles.srOnly}></span>
				</button>

				<ul
					className={
						mobileNav
							? styles.navPrimary
							: `${styles.navPrimary} ${styles.navPrimaryHidden}`
					}
				>
					<li>
						<Link
							href='/'
							onClick={handleClick}
							className={router.asPath === "/" ? styles.activePage : ""}
						>
							home
						</Link>
					</li>
					<li>
						<Link
							href='/about'
							onClick={handleClick}
							className={router.asPath === "/about" ? styles.activePage : ""}
						>
							about
						</Link>
					</li>
					<li>
						<Link
							href='/work'
							onClick={handleClick}
							className={router.asPath === "/work" ? styles.activePage : ""}
						>
							projects
						</Link>
					</li>
					<li>
						<Link
							href='/contact'
							onClick={handleClick}
							className={router.asPath === "/contact" ? styles.activePage : ""}
						>
							contact
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export { Nav };
