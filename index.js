'use strict';

/**
 * Returns a json string with moderation details for an image url
 * @param {string} url
 * @param {string} key
 * @return {string} json response
 */
exports.evaluate = function(url, key) {
	return new Promise(function(resolve, reject) {
		var https = require('https');
		var options = {
			host: 'api.moderatecontent.com',
			port: 443,
			path: '/moderate/?url=' + url + '&key=' + key
		};
		https.get(options, function(resp){
			resp.setEncoding('utf8');
			resp.on('data', function(response){
				resolve(response);
			});
		});
	});
}

/**
 * Returns a boolean indicating if adult content was found
 * @param {string} url
 * @param {string} key
 * @return {boolean}
 */
exports.is_adult = function(url, key) {
	return new Promise(function(resolve, reject) {
		var https = require('https');
		var options = {
			host: 'api.moderatecontent.com',
			port: 443,
			path: '/moderate/?url=' + url + '&key=' + key
		};
		https.get(options, function(resp){
			resp.setEncoding('utf8');
			resp.on('data', function(response){
				var json = JSON.parse(response);
				var flag = (json.rating_letter == "a");
				resolve(flag);
			});
		});
	});
}