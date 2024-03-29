import utilStyles from "../../styles/utils.module.css";
import styles from "./serviceGrid.module.css";
import { useRef, useEffect, useState } from "react";

const ServiceGrid = () => {
	const itemsRef = useRef(null);

	// WAAPI animations
	const listFadeKeyFrame = [
		{ opacity: 0, filter: "blur(3px)", clipPath: "inset(45% 0% 45% 0%)", easing:"ease-in" },
		{ opacity: 1, filter: "blur(0)", clipPath: "inset(0% 0% 0% 0%)" },
	];

	const listTiming = {
		duration: 1000,
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
		threshold: 0.25,
	};


// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		let target;

		const callback = (entries, observer) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) {
					return;
				}

				entry.target.animate(listFadeKeyFrame, listTiming);
				observer.unobserve(entry.target);
			});
		};

		const observer = new IntersectionObserver(callback, options);

		target = itemsRef.current;

		target.forEach(item => observer.observe(item));
	}, [itemsRef]);

// eslint-enablereact-hooks/exhaustive-deps

	return (
		<div>
			<h2 className={utilStyles.sectionTitle}>Services</h2>

			<div className={styles.servicesContainer}>
				<div className={styles.logoDesign}>
					<h3>01/ Logo Design</h3>
				</div>

				<div className={styles.logoContent}>
					<p className={styles.listHeading}>includes</p>
					<ul
						style={{ opacity: "0" }}
						ref={node => {
							if (node) {
								const nodeArr = getArr();
								nodeArr.push(node);
							}
						}}
					>
						<li>Initial Brand call & Branding Questionnaire</li>
						<li>Mood Board Concept</li>
						<li>Logo Suite : Primary, Secondary Logo and Submark</li>
						<li>Custom Colour Palette</li>
						<li>Typography</li>
						<li>Mini Brand Guidelines</li>
						<li>2 Revisions</li>
					</ul>
				</div>

				<div className={styles.brand}>
					<h3>02/ Full Brand Design</h3>
				</div>

				<div className={styles.brandContent}>
					<p className={styles.listHeading}>includes</p>
					<ul
						style={{ opacity: "0" }}
						ref={node => {
							if (node) {
								const nodeArr = getArr();
								nodeArr.push(node);
							}
						}}
					>
						<li>Initial Brand call & Branding Questionnaire</li>
						<li>2 Initial Mood Board Concepts</li>
						<li>Logo Suite : Primary, Secondary Logo and Submark</li>
						<li>Custom Colour Palette</li>
						<li>Typography</li>
						<li>5 Social Media Templates</li>
						<li>5 Highlight Covers</li>
						<li>Brand Guidelines</li>
						<li>2 Revisions</li>
					</ul>
				</div>

				<div className={styles.web}>
					<h3>03/ Web Design</h3>
				</div>

				<div className={styles.webContent}>
					<p className={styles.listHeading}>includes</p>
					<ul
						style={{ opacity: "0" }}
						ref={node => {
							if (node) {
								const nodeArr = getArr();
								nodeArr.push(node);
							}
						}}
					>
						<li>Custom Website</li>
						<li>Initial Brand call & Web Content Questionnaire</li>
						<li>Domaine Transfer / Domaine set up</li>
						<li>Social Media & Email Marketing Integration</li>
						<li>Responsive Design</li>
						<li>UX Design</li>
						<li>Basic SEO</li>
						<li>Launch Support</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export { ServiceGrid };
