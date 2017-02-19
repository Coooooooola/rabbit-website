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
	logCards.push(initLogCard(cardContainer, logCard, 'log-2192017', 'color-secondly'));
	logCards.push(initLogCard(cardContainer, logCard, 'log-2172017', 'color-primary'));
	$(logCards[0]).find('.log-detail').addClass('in');
}

