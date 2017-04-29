'use strict';

/*var tweetsGuider, worksGuider, targetProgressGuider, noteGuider, updateLogGuider;
var tweetsCards, worksCards, targetProgressCards, noteCards, updateLogCards;

function initActiveMenus() {
	initActiveMenu(topMenuActiveMenu, 'a', 0);
	initActiveMenu(profileNavActiveMenu, 'a', 0);
}

function initLogCards() {
	for (let i = 0; i < logs.length; i++) {
		let log = logs[i];

		let card = initLogCard(cardContainer, logCardTemplate, dateToID(log.date), 'color-' + log.type);
		card.querySelector('.log-time').innerText = 'Version: ' + log.version + '	Date: ' + log.date;
		let des = card.querySelector('.log-description');
		des.innerText = log.description;
		let feaContainer = card.querySelector('.update-features');
		for (let j = 0; j < log.features.length; j++) {
			let li = document.createElement('li');
			li.innerText = log.features[j];
			feaContainer.appendChild(li);
		}
		logCards.push(card);
	}
	$(logCards[logCards.length - 1]).find('.log-detail').addClass('in');
}
*/

function initMenus() {
	menuListener(topMenuActiveMenu, 'click');
	menuListener(profileNavActiveMenu, 'click', mapping(active), function (menu) {
		var id = location.href.replace(/^[^#]*/, '');
		var btn = profileNavActiveMenu.querySelector('a[href$="' + id + '"]');
		if (btn)
			btn.click();
		else
			menu.querySelector('a[href$="#tweets"]').click();
	});
	menuListener(sampleList, 'click');
}

function initLogCards(logs) {
	var cardContainer = updateLogContainer.querySelector('.card-container');
	var sample = updateLogContainer.querySelector('.sample-container>.update-log-card');
	sample.parentElement.parentElement.removeChild(sample.parentElement);
	var logCards = [];
	for (let log of logs) {
		let card = initLogCard(sample, log);
		cardContainer.insertBefore(card, cardContainer.firstChild);
		logCards.push(card);
	}
	cardContainer.querySelector('a').click();
	return logCards;
}