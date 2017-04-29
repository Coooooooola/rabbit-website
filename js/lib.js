'use strict';

/*function initActiveMenu(menu, nodeName, num, callBack) {
	var nodes = menu.querySelectorAll(nodeName);
	for (let i = 0; i < nodes.length; i++) {
		let node = nodes[i];

		node.onclick = function () {
			$(menu.active).parent().removeClass('active');
			var last = menu.active;
			menu.active = this;
			this.parentNode.className += ' active';
		};
	}
	if (! isNaN(num)) {
		menu.active = nodes[num];
		nodes[num].onclick();
	}
}*/

/*function initLogGuider() {
	var newLogGuider = logGuider.cloneNode(true);
	guider.appendChild(newLogGuider);
	initActiveMenu(newLogGuider, '.sample-btn', 0);
	return newLogGuider;
}*/

/*function initLogCard(parent, card, id, color) {
	var cardCopy = card.cloneNode(true);
	
	cardCopy.querySelector('.log-detail').id = id;
	
	var link = cardCopy.querySelector('.log-time');
	$(link).attr('href', '#' + id);
	
	$(cardCopy).addClass(color);
	parent.insertBefore(cardCopy, parent.firstChild);
	return cardCopy;
}

function activeNode(last, next) {
	last.node.style.display = 'none';
	next.node.style = none;
}*/

function mapping(callBack) {
	return function (event) {
		var href;
		for (let element of event.path) {
			if (element.tagName == 'A') {
				href = element.href;
				break;
			}
		}
		var id = href.replace(/^[^#]*/, '');
		callBack(id);
	};
	
}

function active(id) {
	var container = document.querySelector(id + '-container');
	if (container.parentElement.active)
		container.parentElement.active.style.display = null;
	container.parentElement.active = container;
	container.style.display = 'block';
}

function initLogCard(cardSample, log) {
	var card = cardSample.cloneNode(true);
	card.className += ' color-' + log.type;
	var id = dateToID(log.date);
	var title = card.querySelector('.log-time');
	title.href = '#' + id;
	title.innerText = 'Version: ' + log.version + '   Date: ' + log.date;
	var logDetail = card.querySelector('.log-detail');
	logDetail.id = id;
	logDetail.querySelector('.log-description').innerText = log.description;
	var features = logDetail.querySelector('.update-features');
	for (let feature of log.features) {
		let item = document.createElement('li');
		item.innerText = feature;
		features.appendChild(item);
	}
	return card;
}

function menuListener(menu, type, callBack, initFunc) {
	menu.addEventListener(type, function (event) {
		var active;
		for (let element of event.path) {
			active = element;
			if (active.parentElement == this)
				break;
			if (active == this)
				return;
		}
		if (active == menu.active)
			return;
		if (menu.active)
			menu.active.className = '';
		menu.active = active;
		active.className = 'active';

		if (callBack)
			callBack(event);		
	});
	if (initFunc)
		initFunc(menu);
	else
		menu.firstElementChild.click();
}
