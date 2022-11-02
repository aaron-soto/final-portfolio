// enable bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// set time in footer
// var clockElement = document.getElementById('clock');

// function clock() {
// 	var date = new Date();

// 	clockElement.textContent = date.toLocaleString();
// }

// setInterval(clock, 1000);
