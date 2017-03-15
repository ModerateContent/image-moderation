'use strict';

var chai = require("chai");
var expect = require('chai').expect;
var image_moderation = require('../index.js');

describe('#image-moderation', function() {
	this.timeout(15000);
    it('should evaluate a url', function() {
    	return image_moderation.evaluate("https://www.moderatecontent.com/img/sample_faces.jpg")
    		.then((response)=>{
    			var json = JSON.parse(response);
    			// console.log(json);
    			return expect(json.rating_index).to.equal(1);
    		});
    });

    it('should evaluate a url as not adult', function() {
    	return image_moderation.is_adult("https://www.moderatecontent.com/img/sample_faces.jpg")
    		.then((response)=>{
    			return expect(response).to.equal(false);
    		});
    });
});