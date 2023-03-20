import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, A11y, Keyboard } from "swiper";

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
		console.log({ sliderOptions }, "from use effect");
	}, []);

	const projectSlider = {
		className: "slider",
		modules: [Navigation, Pagination, Mousewheel, A11y, Keyboard],
		spaceBetween: 10,
		slidesPerView: 1,
		loop: true,
		centeredSlides: true,
		direction: "horizontal",
		mousewheel: true,
		keyboard: { enabled: true },
		// pagination:{
		//   clickable: true,
		//   dynamicBullets: true
		// },
		breakpoints: sliderOptions,
	};
	return (
		<>
			{sliderOptions && (
				<Swiper {...projectSlider}>
					<SwiperSlide>
						<div className={styles.projectContainer}>
							<Link href='/work'>
								<Image
									className={styles.projectImg}
									src='/fresh/fresh_package.png'
									height={430}
									width={270}
								/>
							</Link>
							<span className={styles.projectName}>fresh & Kind</span>
							<span className={styles.projectType}>logo & packaging</span>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className={styles.projectContainer}>
							<Link href='/work'>
								<Image
									className={styles.projectImg}
									src='/silk_28.png'
									height={430}
									width={270}
								/>
							</Link>
							<span className={styles.projectName}>silk & sense</span>
							<span className={styles.projectType}>logo</span>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className={styles.projectContainer}>
							<Link href='/work'>
								<Image
									className={styles.projectImg}
									src='/moane/colours_artboard.png'
									height={430}
									width={270}
								/>
							</Link>
							<span className={styles.projectName}>moane</span>
							<span className={styles.projectType}>logo</span>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className={styles.projectContainer}>
							<Link href='/work'>
								<Image
									className={styles.projectImg}
									src='/fresh/fresh_kind.png'
									height={430}
									width={270}
								/>
							</Link>
							<span className={styles.projectName}>fresh & kind</span>
							<span className={styles.projectType}>logo & packaging</span>
						</div>
					</SwiperSlide>
				</Swiper>
			)}
		</>
	);
};

export default Featured;
