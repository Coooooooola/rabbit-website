'use strict';

var arr = [];

var sites = [
	{ "name":"rabbit", "url":"github.com" },
	{ "name":"google", "url":"www.google.com" }
];

var val1 = sites[0].name + ":" + sites[0].url;

console.log(val1);


var txt = '{ "web":[' +
	'{"name":"yaya", "gender":"male"},' +
	'{"name":"haha", "gender":"female"}' + ']}';

var obj = eval('(' + txt + ')');
console.log(obj);