import React from 'react'
import utilStyles from '../../styles/utils.module.css'
import styles from './serviceGrid.module.css'

const ServiceGrid = () => {
  return (
    <div className={utilStyles.container}>
		<h2 className={utilStyles.sectionTitle}>Services</h2>

        <div className={styles.servicesContainer}>

			<div className={styles.logoDesign}>
				<h3>01/ Logo Design</h3>
			</div>
            
            <div className={styles.logoContent}>
				<p className={styles.listHeading}>includes</p>
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

			<div className={styles.brand}>
				<h3>02/ Full Brand Design</h3>
			</div>

            <div className={styles.brandContent}>
                <p className={styles.listHeading}>includes</p>
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

			<div className={styles.web}>
                <h3>03/ Web Design</h3>
			</div>

            <div className={styles.webContent}>
				<p className={styles.listHeading}>includes</p>
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

        </div>
	</div>
  )
}

export default ServiceGrid