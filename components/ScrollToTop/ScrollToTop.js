import React from "react";
import styles from "./scrollToTop.module.css";
import { FaChevronUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const ScrollToTop = ({ pageTop }) => {
	const [showScrollBtn, setShowScrollBtn] = useState(false);

	const handleScroll = () => {
		const winScrollValue =
			document.documentElement.scrollTop || document.body.scrollTop;

		winScrollValue > 50 ? setShowScrollBtn(true) : setShowScrollBtn(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const HandleClick = () => {
		pageTop.current.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<>
			<button
				className={`${styles.scrollBtn} ${showScrollBtn ? styles.visable : ""}`}
				onClick={HandleClick}
			>
				<FaChevronUp size={24} />
			</button>
		</>
	);
};

export { ScrollToTop };
