Image-Moderation
=========

Image API to categorize it as adult, teen or everyone using the FREE automated image moderation API at moderatecontent.com

## Installation

  npm install image-moderation --save

## Usage

	var image_moderation = require('image-moderation');
	var api_response_json = image_moderation.evaluate("https://www.moderatecontent.com/img/sample_faces.jpg");
	console.log(api_response_json);

## Release History

* 1.0.0 Fixed header

* 1.0.0 Initial release