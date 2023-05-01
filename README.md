# Nou Design Studio

![project page screenshot](/screenshot.png)

## Deployment

:rocket: **Deployed** with Vercel at [nou-design-studio](https://noudesignstudio.vercel.app/)

## About

Website of Nou Design Studio, built with Next.js / React. Animation features built with **Web Animation API**, **Intersection Observer**, **Parallax scroll** and **Psuedo Elements** bring the website to life. Helping create a creative UI and intuative UX.

Backend handled by built in Next.js API routing. Which allowed the Contact form to use **Node Mailer** for email collection of user input.

## Instructions

Clone down to local machine, `npm install` and `cd nou-design`

`npm run dev` to run in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Wins

-[x] Page scroll tracker and scroll to top features implemented with **useRef**, **useState** and **useEffect** hooks and props for DOM manipulation.

-[x] Contact form with **validation** and email submission feature created using **Node Mailer**.

-[x] Responsive layouts made using **CSS Grid** & **flexbox**.

-[x] Reusable components that feature across multiple pages, such as Nav and Scroll tracker, keep the code DRY. 

-[x] Media queries used increased accessibility, for instance reducing animation for requested browsers.

## Future features

-[] Import latest social media images with API's.

## Significant code

```javascript
// Array of Refs created & Intersection Observer used to iterate over, fading in on scroll with timings differing for images and text.
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
```
