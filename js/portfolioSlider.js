"use strict";

const sliderContainer = document.querySelector(".slider__container");
const slides = document.querySelectorAll(".slider__item");
const projectName = document.querySelector(".content__project-name");
const projectDetails = document.querySelector(".slider__project-details");
const leftArrow = document.querySelector(".content__icon--left");
const rightArrow = document.querySelector(".content__icon--right");

let firstClick = true;
let currentSlide = 2;

const setSlideStyling = () => {
	slides.forEach((slide, i) => {
		const slideIsLeft = i + 1 < currentSlide;
		const slideIsActive = currentSlide === i + 1;
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

		// NOTE: Will work for time being with just 3 projects but will change if more are added as it is dependent on the specific numnber of portfolio projects being 3.
		// BUG NEED TO FIX LOGIC ON THIS.. NOT WORKING TO ADUJUST SPACING IN LEFT AND RIGHT STATES.
		if (i === 0 && i + 1 === currentSlide)
			projectDetails.classList.toggle("left-active");
		if (i === 2 && i + 1 === currentSlide)
			projectDetails.classList.toggle("right-active");
	});
};

const setActiveSlideDetails = () => {
	if (currentSlide === 1)
		projectName.innerHTML = "Cryptocurrency Price Project";
	if (currentSlide === 2) projectName.innerHTML = "Shopping Cart Page";
	if (currentSlide === 3) projectName.innerHTML = "My Pooch";
};

const rightArrowHandler = () => {
	// Gaurd Clause for when we are on last slides
	if (currentSlide === slides.length) return;

	currentSlide++;
	// console.log(currentSlide, slides.length);

	const matrix = window
		.getComputedStyle(sliderContainer)
		.getPropertyValue("transform");

	const currentTransValue = matrix.replace(/[^\d. -]/g, "");
	const curTransXConverted = +currentTransValue.split(" ")[4];
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

const leftArrowHandler = () => {
	// Gaurd Clause for when we are on last slides
	if (currentSlide === 1) return;

	currentSlide--;

	const matrix = window
		.getComputedStyle(sliderContainer)
		.getPropertyValue("transform");

	const currentTransValue = matrix.replace(/[^\d. -]/g, "");
	const curTransXConverted = +currentTransValue.split(" ")[4];

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

leftArrow.addEventListener("click", leftArrowHandler);
rightArrow.addEventListener("click", rightArrowHandler);
window.addEventListener("load", setActiveSlideDetails);
