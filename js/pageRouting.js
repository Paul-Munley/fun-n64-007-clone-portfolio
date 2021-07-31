// This file will get access to the "previous" tab-nav item and will route it to the previous page.

const backLink = document.getElementById("back-link");

// This will adding a new href attribute of that "previous" tab element and sets it equal to document.referrer. This references the previous page that referred the user to this current page.
backLink.setAttribute("href", document.referrer);

// This is a funciton saying that when the previous tab is clicked, we will go back to the page that we were at prior. We can not have the page go back to the href we sent above. If we did this, the browser would think its a link. So when we are on that next page if we were to click back, the browser would just refresh but be on that same page we were on. Using history.back() works with the browsers native functionality which will allow the browser to know where to bring the user back to.
// The return false; will prevent the function from adding the current page to the history. If we didn't have this line in there, it would make us have to click the previous button twice to actually get to the prior page.
backLink.onclick = () => {
	history.back();
	return false;
};
