// enable bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

let lastCommitDateText = document.getElementById('last-commit-date');
let portfolioRepoUrl =
	'https://api.github.com/repos/aaron-soto/final-portfolio/commits/master';

fetch(portfolioRepoUrl)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		lastCommitDateText.innerHTML = moment(data.commit.committer.date).format(
			'MMM Do YYYY'
		);
	})
	.catch(function () {
		console.log('Booo');
	});
