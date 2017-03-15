'use strict';

/**
 * Image API to categorize it as adult, teen or everyone using the FREE automated image moderation API at moderatecontent.com"
 * @param {string} url
 * @param {function} callback
 */
module.exports = function(url,callback) {
	console.log("process_url: " + url);
	var options = {
		host: 'www.moderatecontent.com',
		port: 443,
		path: '/api/v2?url=' + url + '&animation=true'
	};
	https.get(options, function(resp){
		resp.setEncoding('utf8');
		resp.on('data', function(response){
			console.log(response);
			callback(response);
		});
	});
};