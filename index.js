'use strict';

module.exports = function () {
	var numbs = '0123456789';
	var nicks = 'abcdefhijklmnopqrstuvwxyz';
	var key = '\\u';

	var randNumbs = numbs.charAt(Math.floor(Math.random() * numbs.length));
	var randNicks = nicks.charAt(Math.floor(Math.random() * nicks.length));

	for (var i = 0; i < 5; i++) {
		return key + randNicks + randNumbs + randNicks + randNumbs;
	}
}