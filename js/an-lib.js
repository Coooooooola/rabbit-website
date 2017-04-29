'use strict';

const BGOFFSET = 54;

var date = new Date();

function del_cookie(name) {
	document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT';
}

function fix(element, triggerTop, className, condition1, condition2) {
	var fixFunc = function (event) {
		var top = element.getBoundingClientRect().top;
		if (top < triggerTop) {
			element.className += ' ' + className;
			if (condition1)
				condition1(event);
		} else if (top == 0 && element.parentElement.getBoundingClientRect().top > triggerTop) {
			element.className = element.className.replace(' ' + className, '');
			if (condition2)
				condition2(event);
		}
	};
	addEventListener('scroll', fixFunc);
	fixFunc();
	return fixFunc;
}

function bgadjustment() {
	var canopyBg = document.querySelector('.profile-canopy-inner.bg-img');
	var posMask = document.querySelector('.pos-mask.bg-img');
	var style = getComputedStyle(canopyBg);
	var y = parseInt(style.backgroundPositionY);
	var res = y + BGOFFSET;
	posMask.style.backgroundPositionY = res + 'px';
}

function triggerProfile() {
	
}