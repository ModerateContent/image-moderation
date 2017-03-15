Image-Moderation
=========

Image API to categorize it as adult, teen or everyone using the FREE automated image moderation API at moderatecontent.com

## Installation

  npm install image-moderation --save

## Usage

	var image_moderation = require('image-moderation');
	
	image_moderation.evaluate("https://www.moderatecontent.com/img/sample_faces.jpg")
	.then((response) => {
		var json = JSON.parse(response);
		console.log(json);
	});

	image_moderation.is_adult("https://www.moderatecontent.com/img/sample_faces.jpg")
	.then((response) => {
		console.log("Does this image have adult content (true | false)? " + response);
	});

## Release History

* 1.0.2 Added tests

* 1.0.1 Fixed header

* 1.0.0 Initial release