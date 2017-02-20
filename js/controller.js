'use strict';

function initNavMenus() {
	for (let menu of navMenus)
		initNavMenu(menu, 'a', 0);
}

function initLogGuider() {
	var newLogGuider = logGuider.cloneNode(true);
	guider.appendChild(newLogGuider);
	initNavMenu(newLogGuider, '.sample-btn', 0);
}

function initLogCards() {
	for (const log of logs) {
		let card = initLogCard(cardContainer, logCardTemplate, dateToID(log.date), 'color-' + log.type);
		card.querySelector('.log-time').innerText = 'Version: ' + log.version + '   Date: ' + log.date;
		let des = card.querySelector('.log-description');
		des.innerText = log.description;
		if (! log.description)
			des.innerText = 'No description.';
		let feaContainer = card.querySelector('.update-features');
		for (let str of log.features) {
			let li = document.createElement('li');
			li.innerText = str;
			feaContainer.appendChild(li);
		}
		logCards.push(card);
	}
	$(logCards[logCards.length - 1]).find('.log-detail').addClass('in');
}

