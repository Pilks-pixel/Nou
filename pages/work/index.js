import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Work.module.css";
import utilStyles from "../../styles/utils.module.css";
import Nav from "../../components/Nav/Nav";
import Image from "next/image";
import Info from "../../components/Info/Info";
import ScrollTracker from "../../components/ScrollTracker/ScrollTracker";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { useRef, useEffect } from "react";
import { projectsData } from "../data";

export default function Work() {
	const scrollRef = useRef(null);
	const itemsRef = useRef(null);

	// WAAPI animations
	const fadeInKeyFrame = [
		{ opacity: 0, filter: "blur(3px)" },
		{ opacity: 1, filter: "blur(0)" },
	];

	const imageTiming = {
		duration: 1500,
		iterations: 1,
		fill: "both",
	};

	const textTiming = {
		duration: 1500,
		iterations: 1,
		fill: "both",
	};

	// Intersection Observer Appear on Scroll Logic
	function getArr() {
		if (!itemsRef.current) {
			itemsRef.current = [];
		}
		return itemsRef.current;
	}

	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.5,
	};

	useEffect(() => {
		const callback = (entries, observer) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) {
					return;
				}

				entry.target.animate(fadeInKeyFrame, imageTiming);
				observer.unobserve(entry.target);
			});
		};

		const observer = new IntersectionObserver(callback, options);

		let target = itemsRef.current;

		target.forEach(item => observer.observe(item));
	}, [itemsRef]);

	// Display each project from Data
	const projectCards = projectsData.map(data => {
		const {
			heading,
			subHeading,
			descriptionHeading,
			description,
			primaryImage,
			images,
			parallaxImage,
		} = data;

		return (
			<section className={styles.project}>
				<div
					className={styles.parrallax}
					style={{ backgroundImage: `url(${parallaxImage})` }}
				></div>
				<div className={styles.projectCard}>
					<div className={styles.projectTitle}>
						<h2>{heading}</h2>
						<p>{subHeading}</p>
					</div>
					<Image
						className={styles.mainProjectImg}
						src={primaryImage}
						height={400}
						width={350}
						alt={`${heading} logo`}
						priority
						ref={node => {
							if (node) {
								const nodeArr = getArr();
								nodeArr.push(node);
							}
						}}
					></Image>

					<div
						className={styles.projectDescription}
						ref={node => {
							if (node) {
								const nodeArr = getArr();
								nodeArr.push(node);
							}
						}}
					>
						<h3>{descriptionHeading}</h3>
						{/* display all paragraphs in discription */}
						{description.map(paragraph => {
							return <p>{paragraph}</p>;
						})}
					</div>
					{/* display all images */}
					{images.map(img => {
						return (
							<Image
								className={styles.projectImg}
								src={img}
								height={400}
								width={350}
								alt={`${heading} content images`}
								ref={node => {
									if (node) {
										const nodeArr = getArr();
										nodeArr.push(node);
									}
								}}
							></Image>
						);
					})}
				</div>
			</section>
		);
	});

	return (
		<>
			<Head>
				<title>Work</title>
			</Head>

			<div className={`${styles.theme}`}>
				<header className={styles.header}>
					<Nav />
					<ScrollTracker />
				</header>

				<ScrollToTop pageTop={scrollRef} />
				<main className={`${styles.projectContainer} `} ref={scrollRef}>
					<h2 className={styles.mainTitle}>Featured work</h2>

					{projectCards}

					<footer className={styles.pageLinks}>
						<Info />
					</footer>
				</main>
			</div>
		</>
	);
}
