const mouseCursor = document.querySelector(".cursor");

// Selects img to make sure to not display placeholder img when there's and issue loading img
const mouseCursorImg = document.querySelector(".cursor__img");

// Body
const body = document.getElementsByTagName("body")[0];

// Select and copy all nav items on page
const [...items] = document.querySelectorAll(".nav__item");

// Select and copy all nav links on page
const [...links] = document.getElementsByTagName("a");

const pageTabs = document.querySelectorAll(".tab-nav__item");

let cursorError = false;

// When there's an error loading custom cursor img
const cursorErrorHandler = () => {
	console.log("hola");
	cursorError = true;
	mouseCursorImg.style.display = "none";
	body.style.cursor = "default";
	// items.forEach( item => item.classList.add("default-cursor"));
};

if (!cursorError);
console.log("hello");

// Change to no cursors for nav items, nav links, and page tabs to prevent :hover pointer
items.forEach(item => (item.style.cursor = "none"));
links.forEach(link => (link.style.cursor = "none"));
pageTabs.forEach(tab => (tab.style.cursor = "none"));

// Add custom cursor to current mouse location
const followCursorHandler = e => {
	mouseCursor.style.top = e.pageY + "px";
	mouseCursor.style.left = e.pageX + "px";
};

// [window, document].forEach(el => {
// 	el.addEventListener("mousemove", followCursorHandler);
// 	el.addEventListener("mouseleave", () => {
// 		mouseCursorImg.removeAttribute("src");
// 		mouseCursor.style.display = "none";
// 	});
// 	el.addEventListener("mouseenter", () => {
// 		mouseCursorImg.setAttribute("src", "../assets/imgbin_reticle-png.png");
// 	});
// });

window.addEventListener("mousemove", followCursorHandler);
// mouseCursorImg.addEventListener();

// window.addEventListener("mouseleave", () => {
// 	mouseCursorImg.removeAttribute("src");
// });

// window.addEventListener("mouseenter", () =>
// 	mouseCursorImg.setAttribute("src", "../assets/imgbin_reticle-png.png")
// );
