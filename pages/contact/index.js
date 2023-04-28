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

	// Form handlers
	const handleInput = e => {
		const {name, value, type} = e.target;

		if (type === 'checkbox') {
			console.log({formData})
			setFormData(prevFormData => {
				return {
					...prevFormData,
					[name] : !prevFormData[name]
				}
			})
		} else {
			setFormData(prevFormData => {
			   return {
				   ...prevFormData,
				   [name] : value
			   }
	
		   })
		}

	}

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

			<div className={`${utilStyles.container} ${styles.theme}`}>
				<header>
					<Nav />
				</header>

				<main className={`${styles.contactContainer}`}>
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
								name='customerName'
								onChange={handleInput}
								required
							/>
						</label>

						<label>
							Email <br></br>
							<input
								className={styles.textInput}
								name='email'
								type='email'
								onChange={handleInput}
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
								onChange={handleInput}
							/>
							Branding
						</label>
						<label>
							<input
								name='webDesign'
								type='checkbox'
								onChange={handleInput}
							/>
							Web Design
						</label>
						<label>
							<input
								name='print'
								type='checkbox'
								onChange={handleInput}
							/>
							Print Design
						</label>
						<label>
							<input
								className={styles.formCheckOther}
								name='other'
								type='checkbox'
								onChange={handleInput}
							/>
							Other
						</label>

						<label htmlFor='deadlineInputId'>
							Are there any deadlines that we should be aware of? <br></br>
							<input
								className={styles.textInput}
								name='deadline'
								id='deadlineInputId'
								onChange={handleInput}
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
									setFormData({ ...formData, description: e.target.value })
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

					<footer className={styles.contactFooter}>
						<Info />
					</footer>
				</main>
			</div>
		</>
	);
}
