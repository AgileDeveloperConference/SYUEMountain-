
'use strict'

// Assert Library
var chai = require('chai');
var expect = chai.expect;

// "lib"
var hightwayData = require('../src/highwayData');

describe("Get Remote data and parse to model",function(){
	it("Get Remote Data",function(done){
		this.timeout(20000);
		var getData = hightwayData.getHighwayData('濱海公路');
		getData.done(function(data){
			done();
		})
	});
});
