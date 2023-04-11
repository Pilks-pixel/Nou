import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Contact.module.css";
import utilStyles from "../../styles/utils.module.css";
import Nav from "../../components/Nav/Nav";
import Info from "../../components/Info/Info";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const endpoint = "/api/form";

export default function Contact() {
	const [warningText, setWarningText] = useState(false);
	const [formData, setFormData] = useState({
		customerName: "",
		email: "",
		deadline: "",
		description: "",
		branding: false,
		webDesign: false,
		print: false,
		other: false,
	});

	// Toast notification settings

	const toastWarning = {
		position: "top-right",
		autoClose: 4000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		transition: Zoom,
	};

	const toastSucess = {
		position: "top-right",
		autoClose: 4000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		transition: Zoom,
	};

	// Form handler

	const handleSubmission = async e => {
		e.preventDefault();

		function validateForm() {
			const { customerName, email, deadline, description } = formData;
			const patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

			if (customerName.length < 3) {
				toast.warn("Name must be at least 3 characters long", toastWarning);
				return false;
			} else if (!patternEmail.test(email)) {
				toast.warn("Must be a valid email", toastWarning);
				return false;
			} else if (description.length > 200) {
				toast.warn("Max description 200 characters", toastWarning);
				return false;
			} else if (deadline > 30) {
				toast.warn("Max deadline 30 characters", toastWarning);
				return false;
			} else {
				return true;
			}
		}

		if (validateForm()) {
			const { data } = await toast.promise(axios.post(endpoint, { formData }), {
				pending: "Sending..",
				success: "Message sent 👌",
				error: "Message rejected 🤯",
			});
			console.log(data);
		}
	};

	return (
		<>
			<Head>
				<title>Contact</title>
			</Head>

			<div className={utilStyles.contactContainer}>
			<header>
				<Nav />
			</header>

			<main className={`${styles.theme}`}>
				<div className={styles.contactContainer}>
					<h2 className={styles.title}>GET IN CONTACT</h2>
					<section className={styles.formDescription}>
						<p>
							Are you ready to take your business to <span>the next level</span>
							?
						</p>
						<p>
							Please fill out the form below so we can get an idea of your
							project needs.
						</p>
						<p>(Please allow 2 business days to hear back from us)</p>
					</section>

					<form onSubmit={handleSubmission} className={styles.formContainer}>
						<label>
							Name <br></br>
							<input
								className={styles.textInput}
								name='name'
								onChange={e => {
									setFormData({ ...formData, customerName: e.target.value });
								}}
								required
							/>
						</label>

						<label>
							Email <br></br>
							<input
								className={styles.textInput}
								name='email'
								type='email'
								onChange={e => {
									setFormData({ ...formData, email: e.target.value });
								}}
								required
							/>
						</label>

						<p className={styles.formServicesTitle}>
							What service(s) are you interested in?
						</p>
						<label>
							<input
								name='branding'
								type='checkbox'
								onChange={e => {
									setFormData({ ...formData, branding: !formData.branding });
								}}
							/>
							Branding
						</label>
						<label>
							<input
								name='webDesign'
								type='checkbox'
								onChange={e => {
									setFormData({
										...formData,
										webDesign: !formData.webDesign,
									});
								}}
							/>
							Web Design
						</label>
						<label>
							<input
								name='print'
								type='checkbox'
								onChange={e => {
									setFormData({ ...formData, print: !formData.print });
								}}
							/>
							Print Design
						</label>
						<label>
							<input
								className={styles.formCheckOther}
								name='other'
								type='checkbox'
								onChange={e => {
									setFormData({ ...formData, other: !formData.other });
								}}
							/>
							Other
						</label>

						<label htmlFor='deadlineInputId'>
							Are there any deadlines that we should be aware of? <br></br>
							<input
								className={styles.textInput}
								name='deadline'
								id='deadlineInputId'
								onChange={e => {
									setFormData({ ...formData, deadline: e.target.value });
								}}
								required
							/>
						</label>

						<label htmlFor='textInputId'>
							Please, describe your project below{" "}
							<textarea
								className={
									warningText
										? `${styles.textInput} ${styles.redCharacters}`
										: `${styles.textInput}`
								}
								id='textInputId'
								name='description'
								onChange={e => {
									setFormData({ ...formData, description: e.target.value });
									console.log({ warningText }, e.target.value.length);
									e.target.value.length > 200
										? setWarningText(true)
										: setWarningText(false);
								}}
								required
							/>
						</label>
						<button className={styles.formBtn} type='submit'>
							Let&#39;s Begin
						</button>
					</form>

					<ToastContainer />
				</div>
			</main>
			</div>

			<footer className={utilStyles.container}>
				<Info />
			</footer>
		</>
	);
}
