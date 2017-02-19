'use strict';

var content, pageContainer, contentContainer, langMenu;
var guider, cardContainer;
var navMenus = [];
var logGuider, logCard;
var sampleList;

var logCards = new Array();

(function initParentNode() {
	content = document.querySelector('#content');
	pageContainer = document.querySelector('#page-container');
	contentContainer = document.querySelector('#content-container');
	langMenu = document.querySelector('#lang-menu');
	guider = document.querySelector('.guider');
	cardContainer = document.querySelector('.card-container');
	navMenus = document.querySelectorAll('.js-nav-menu');
	logGuider = document.querySelector('.update-log-guider');
	logCard = document.querySelector('.update-log-card');
	sampleList = document.querySelector('.sample-list');
})();

function initNavMenu(menu, nodeName, num) {
	var nodes = menu.querySelectorAll(nodeName);
	console.log(nodes);
	for (const node of nodes) {
		node.onclick = function () {
			$(menu.active).removeClass('active');
			menu.active = this;
			this.className += ' active';
		};
	}
	if (! isNaN(num)) {
		menu.active = nodes[num];
		nodes[num].onclick();
	}
}

function initLogCard(parent, card, id, color) {
	var cardCopy = card.cloneNode(true);
	
	cardCopy.querySelector('.log-detail').id = id;
	
	var link = cardCopy.querySelector('.log-time');
	$(link).attr('href', '#' + id);
	
	$(cardCopy).addClass(color);
	parent.appendChild(cardCopy);
	return cardCopy;
}

