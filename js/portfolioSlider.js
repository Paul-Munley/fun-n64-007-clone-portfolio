// SELECTORS
const [item1, item2, item3] = document.querySelectorAll(".slider__item");
console.log(item1);
console.log(item2);
console.log(item3);
const leftArrow = document.querySelector(".content__icon--left");
const rightArrow = document.querySelector(".content__icon--right");

// CURRENT ACTIVE SLIDE
let currentActiveSlide = 1;

// EVENT HANDLERS
const leftArrowHandler = () => {
	// Gaurd clause
	if (currentActiveSlide === slideItems.length - 1) return;

	currentActiveSlide += 1;

	slideItems.forEach(item => {
		let currentTrans = item.style.transform;

		const currentTransValue = +currentTrans.replace(/[^\d.-]/g, "");

		// item.style.transform = `translateX(${currentTransValue - 100}%)`;
	});
};

const rightArrowHandler = () => {
	// Gaurd clause
	if (currentActiveSlide === 0) return;

	currentActiveSlide -= 1;

	slideItems.forEach(item => {
		let currentTrans = item.style.transform;

		const currentTransValue = +currentTrans.replace(/[^\d.-]/g, "");

		item.style.transform = `translateX(${currentTransValue + 100}%)`;
	});
};

// EVENT LISTENERS
leftArrow.addEventListener("click", leftArrowHandler);
rightArrow.addEventListener("click", rightArrowHandler);

//////////////////////////////////////////////////////////
// NOT ACTIVE SLIDE STYLING
