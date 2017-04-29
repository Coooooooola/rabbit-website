'use strict';

/*initActiveMenus();
initLogGuider();
initLogCards();


function newRegExp(pattern, str) {
	var regex = new RegExp(pattern);
	console.log(regex.test(str));
	return regex;
}

function exp(exp, str) {
	console.log(exp.test(str));
	return exp;
}

function match(str, exp) {
	console.log(str.match(exp));
}*/

initMenus();
initLogCards(logs);

fix(profileNavBarInside, 0, 'fix-top', function () {
	profileAvatar.style.display = 'none';
	profileInfoDetail.style.display = null;
}, function () {
	profileAvatar.style.display = null;
	profileInfoDetail.style.display = 'none';
});

bgadjustment();