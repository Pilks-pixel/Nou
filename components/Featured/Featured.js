import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, A11y, Keyboard } from "swiper";
import { projectsData } from "../../Data/data";
import { v4 as uuidv4 } from "uuid";

const Featured = () => {
	const [sliderOptions, setSliderOptions] = useState(null);

	useEffect(() => {
		const deviceBreakpoints = {
			480: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		};

		setSliderOptions(deviceBreakpoints);
	}, []);

	const projectSlider = {
		className: "slider",
		modules: [Navigation, Pagination, Mousewheel, A11y, Keyboard],
		spaceBetween: 10,
		slidesPerView: 1,
		loop: true,
		centeredSlides: true,
		direction: "horizontal",
		mousewheel: {
			forceToAxis: true,
		},
		keyboard: { enabled: true },

		breakpoints: sliderOptions,
	};

	// create array of project cards and shuffle
	const projectArr = [];

	projectsData.map(data => {
		let { heading, subHeading, primaryImage, images } = data;
		return projectArr.push(
			{ title: heading, type: subHeading, image: primaryImage, id: uuidv4() },
			{ title: heading, type: subHeading, image: images[0], id: uuidv4() }
		);
	});

	const shuffledArr = arr => {
		for (let i = arr.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * i + 1);
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	};

	// Create a swiper for each project
	const getSliderCards = () => {
		const swipers = shuffledArr(projectArr);

		return swipers.map(swiper => {
			let { id, title, type, image } = swiper;

			return (
				<SwiperSlide key={id}>
					<div className={styles.projectContainer}>
						<Link href='/work'>
							<Image
								className={styles.projectImg}
								src={image}
								height={430}
								width={270}
								alt={`Images from ${title}`}
							/>
						</Link>
						<span className={styles.projectName}>{title}</span>
						<span className={styles.projectType}>{type}</span>
					</div>
				</SwiperSlide>
			);
		});
	};

	return (
		<>
			{sliderOptions && <Swiper {...projectSlider}>{getSliderCards()}</Swiper>}
		</>
	);
};

export { Featured };
