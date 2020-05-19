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
		// console.log("process_url: " + url);
		var options = {
			host: 'api.moderatecontent.com',
			port: 443,
			path: '/moderate/?url=' + url + '&key=' + key
		};
		https.get(options, function(resp){
			resp.setEncoding('utf8');
			resp.on('data', function(response){
				// console.log(response);
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
		// console.log("process_url: " + url);
		var options = {
			host: 'www.moderatecontent.com',
			port: 443,
			path: '/moderate/?url=' + url + '&key=' + key
		};
		https.get(options, function(resp){
			resp.setEncoding('utf8');
			resp.on('data', function(response){
				var json = JSON.parse(response);
				// console.log(json.animation.animation_rating_letter);
				var flag = (json.rating_letter == "a" || json.animation.animation_rating_letter == "a");
				// var flag = false;
				resolve(flag);
			});
		});
	});
}