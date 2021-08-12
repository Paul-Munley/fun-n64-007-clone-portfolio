const setAttributes = (el, attributes) => {
	const attrs = Object.entries(attributes);

	attrs.forEach(([key, val]) => {
		// console.log(key, value);
		el.setAttribute(key, val);
	});
};
