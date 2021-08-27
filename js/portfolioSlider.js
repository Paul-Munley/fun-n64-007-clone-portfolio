"use strict";

// SELECTORS
const sliderContainer = document.querySelector(".slider__container");
const slides = document.querySelectorAll(".slider__item");
const projectName = document.querySelector(".content__project-name");
const projectDetails = document.querySelector(".slider__project-details");
const githubLink = document.querySelector(".slider__github-link");
const projectLink = document.querySelector(".slider__website-link");
const leftArrow = document.querySelector(".content__icon--left");
const rightArrow = document.querySelector(".content__icon--right");

let firstClick = true;
let currentSlide = 2;

const setSlideStyling = () => {
	slides.forEach((slide, i) => {
		if (window.innerWidth < 452) {
			slide.classList.remove("active", "inactive-right", "inactive-left");
			return;
		}

		// LOGIC FOR SLIDE PROJECT IMAGE STYLING
		const slideIsActive = currentSlide === i + 1;
		const slideIsLeft = i + 1 < currentSlide;
		const slideIsRight = i + 1 > currentSlide;

		if (slideIsActive) {
			// Active Slide
			slide.classList.add("active");
			slide.classList.remove("inactive-right");
			slide.classList.remove("inactive-left");
		} else if (slideIsLeft) {
			// Left Slide
			slide.classList.remove("active");
			slide.classList.add("inactive-left");
		} else if (slideIsRight) {
			// Right Slide
			slide.classList.remove("active");
			slide.classList.add("inactive-right");
		}

		// LOGIC FOR SLIDE ICONS POSITIONING
		const slideLeftEnd = i === 0;
		const slideRightEnd = i + 1 === slides.length;

		if (slideIsActive && !slideLeftEnd && !slideRightEnd) {
			projectDetails.classList.remove("right-active");
			projectDetails.classList.remove("left-active");
		}

		if (slideIsActive && slideRightEnd) {
			projectDetails.classList.add("right-active");
		}

		if (slideIsActive && slideLeftEnd) {
			projectDetails.classList.add("left-active");
		}
	});
};
console.log(window.innerWidth);

// TODO - May be better in the future to add a state folder if you start to add a lot of projects to your portfolio.
// LOGIC FOR SLIDE PROJECT NAMES
const setActiveSlideDetails = () => {
	if (currentSlide === 1) {
		projectName.innerHTML = "Udemy JS Forkify Project";
		setAttributes(githubLink, {
			href: "https://github.com/Paul-Munley/UdemyJSForkifyProject",
			target: "_blank",
		});

		setAttributes(projectLink, {
			href: "https://forkify-paul.netlify.app/",
			target: "_blank",
		});
	}

	if (currentSlide === 2) {
		projectName.innerHTML = "Shopping Cart Page";
		setAttributes(githubLink, {
			href: "https://github.com/Paul-Munley/multitracks",
			target: "_blank",
		});
		setAttributes(projectLink, {
			href: "https://multitracks-shopping-cart.netlify.app/",
			target: "_blank",
		});
	}

	if (currentSlide === 3) {
		projectName.innerHTML = "Cryptocurrency Price Project";
		setAttributes(githubLink, {
			href: "https://github.com/Paul-Munley/crypto-price-project",
			target: "_blank",
		});
		setAttributes(projectLink, {
			href: "https://crypto-price-project.netlify.app/",
			target: "_blank",
		});
	}
};

// RIGHT ARROW
const rightArrowHandler = () => {
	// Gaurd Clause for when we are on last slides
	if (currentSlide === slides.length) return;

	currentSlide++;

	// Gets transformX value for whole flex container to check/set logic for moving flex container (slides)
	const matrix = window
		.getComputedStyle(sliderContainer)
		.getPropertyValue("transform");
	const currentTransValue = matrix.replace(/[^\d. -]/g, "");
	const curTransXConverted = +currentTransValue.split(" ")[4];

	// Moves whole flex container based upon where current flex container is located. Gives impression individual slides are moving
	if (firstClick || curTransXConverted === 0) {
		sliderContainer.style.transform = "translateX(-51rem)";
	} else {
		sliderContainer.style.transform = "translateX(0)";
	}

	// Change active and inactive slide images styling
	setSlideStyling();

	// Change active slide details
	setActiveSlideDetails();

	firstClick = false;
};

// LEFT ARROW

const leftArrowHandler = () => {
	// Gaurd Clause for when we are on last slides
	if (currentSlide === 1) return;

	currentSlide--;

	// Gets transformX value for whole flex container to check/set logic for moving flex container (slides)
	const matrix = window
		.getComputedStyle(sliderContainer)
		.getPropertyValue("transform");
	const currentTransValue = matrix.replace(/[^\d. -]/g, "");
	const curTransXConverted = +currentTransValue.split(" ")[4];

	// Moves whole flex container based upon where current flex container is located. Gives impression individual slides are moving
	if (firstClick || curTransXConverted === 0) {
		sliderContainer.style.transform = "translateX(51rem)";
	} else {
		sliderContainer.style.transform = "translateX(0)";
	}

	// Change active and inactive slide images styling
	setSlideStyling();

	// Change active slide details
	setActiveSlideDetails();

	firstClick = false;
};

// EVENT LISTENERS
leftArrow.addEventListener("click", leftArrowHandler);
rightArrow.addEventListener("click", rightArrowHandler);
window.addEventListener("load", setActiveSlideDetails);
