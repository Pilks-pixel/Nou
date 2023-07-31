import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Work.module.css";
import { Nav, Info, ScrollTracker, ScrollToTop } from "../../components";
import { useRef, useEffect } from "react";
import { projectsData } from "../../Data/data";
import { v4 as uuidv4 } from "uuid";

export default function Work() {
	const scrollRef = useRef(null);
	const itemsRef = useRef(null);

	// WAAPI animations
	const fadeInKeyFrame = [
		{ opacity: 0, filter: "blur(3px)", easing:"ease-out" },
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
		delay: 750,
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

				if (entry.target.tagName.toLowerCase() === "div") {
					entry.target.animate(fadeInKeyFrame, textTiming);
				} else {
					entry.target.animate(fadeInKeyFrame, imageTiming);
				}

				observer.unobserve(entry.target);
			});
		};

		const observer = new IntersectionObserver(callback, options);

		let target = itemsRef.current;

		target.forEach(item => observer.observe(item));
	}, [itemsRef]);

	// Give each project an ID
	const projectCardsWithID = projectsData.map(data => {
		return {
			...data,
			id: uuidv4(),
		};
	});

	// Display each project from Data
	const projectCards = projectCardsWithID.map(data => {
		const {
			heading,
			subHeading,
			descriptionHeading,
			description,
			primaryImage,
			images,
			parallaxImage,
			id,
		} = data;

		return (
			<section className={styles.project} key={id}>
				<div
					className={styles.parallax}
				>
					<div className={styles.parallaxImgContainer}>
						<Image
						src={parallaxImage}
						fill={true}
						alt={'project background image'}
						priority={true}
						style={{objectFit: "cover"}} 
						/>
					</div>
				</div>
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
						priority={true}
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
						{description.map((paragraph, index) => {
							return <p key={index}>{paragraph}</p>;
						})}
					</div>
					{/* display all images */}
					{images.map((img, index) => {
						return (
							<Image
								key={index}
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
