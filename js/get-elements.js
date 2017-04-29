'use strict';

var content, pageContainer, contentContainer, langMenu;
var topMenuActiveMenu;
var profileNavActiveMenu;

var profileNavBarInside;

var tweetsContainer, worksContainer, targetAndProgressContainer, notesContainer, updateLogContainer;

var sampleList, updateLogSampleContainer;
(() => {
	content = document.querySelector('#content');
	pageContainer = document.querySelector('#page-container');
	contentContainer = document.querySelector('#content-container');
	langMenu = document.querySelector('#lang-menu');
	topMenuActiveMenu = document.querySelector('.nav-top-menu.js-active-menu');
	profileNavActiveMenu = document.querySelector('.profile-nav.js-active-menu');

	profileNavBarInside = document.querySelector('.profile-navbar-inside');

	tweetsContainer = document.querySelector('#tweets-container');
	worksContainer = document.querySelector('#works-container');
	targetAndProgressContainer = document.querySelector('#target-and-progress-container');
	notesContainer = document.querySelector('#notes-container');
	updateLogContainer = document.querySelector('#update-log-container');

	sampleList = updateLogContainer.querySelector('.sample-list');
	updateLogSampleContainer = updateLogContainer.querySelector('.sample-container');
})();

var profileAvatar, profileInfoDetail;

(() => {
	profileAvatar = document.querySelector('.profile-avatar');
	profileInfoDetail = document.querySelector('.profile-info-detail');
})();