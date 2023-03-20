import utilStyles from "../../styles/utils.module.css";
import styles from "./service.module.css";
import { useState, useEffect } from "react";

const Service = () => {
	const [logoServicesToggle, setLogoServicesToggle] = useState(false);
	const [brandServicesToggle, setBrandServicesToggle] = useState(false);
	const [webServicesToggle, setWebServicesToggle] = useState(false);

	const handleClick = e => {
		const { id } = e.target;

		switch (id) {
			case "logo":
				setLogoServicesToggle(prevToggle => !prevToggle);
				break;
			case "brand":
				setBrandServicesToggle(prevToggle => !prevToggle);
				break;
			case "web":
				setWebServicesToggle(prevToggle => !prevToggle);
				break;
			default:
				console.log("default from switch!");
		}
	};

	return (
		<div className={utilStyles.container}>
			<h2 className={utilStyles.sectionTitle}>Services</h2>

			<div className={styles.designService}>
				<h3>01/ Logo Design</h3>
				<p onClick={handleClick} id={"logo"} className={styles.serviceBtn}>
					includes <i className='fa-solid fa-caret-down'></i>
				</p>
				{logoServicesToggle && (
					<div className={styles.showServiceContent}>
						<ul>
							<li>Initial Brand call & Branding Questionnaire</li>
							<li>Mood Board Concept</li>
							<li>Logo Suite : Primary, Secondary Logo and Submark</li>
							<li>Custom Colour Palette</li>
							<li>Typography</li>
							<li>Mini Brand Guidelines</li>
							<li>2 Revisions</li>
						</ul>
					</div>
				)}
			</div>
			<div className={styles.designService}>
				<h3>02/ Full Brand Design</h3>
				<p onClick={handleClick} id={"brand"} className={styles.serviceBtn}>
					includes <i className='fa-solid fa-caret-down'></i>
				</p>
				{brandServicesToggle && (
					<div className={styles.showServiceContent}>
						<ul>
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
				)}
			</div>
			<div className={styles.designService}>
				<h3>03/ Web Design</h3>
				<p onClick={handleClick} id={"web"} className={styles.serviceBtn}>
					includes <i className='fa-solid fa-caret-down'></i>
				</p>
				{webServicesToggle && (
					<div className={styles.showServiceContent}>
						<ul>
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
				)}
			</div>
		</div>
	);
};

export default Service;
