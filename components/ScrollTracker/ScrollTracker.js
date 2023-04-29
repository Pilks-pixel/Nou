import React from "react";
import { useEffect, useState } from "react";
import styles from "./scrollTracker.module.css";

const ScrollTracker = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		const winScrollValue =
			document.documentElement.scrollTop || document.body.scrollTop;

		const totalScrollableHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		setScrollPosition((winScrollValue / totalScrollableHeight) * 100);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div
				className={styles.scrollTracker}
				style={{ width: `${scrollPosition}%` }}
			></div>
		</>
	);
};

export { ScrollTracker };
