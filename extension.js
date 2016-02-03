'use strict';

// var util = require('util');
// var Q = require('q');
// var request = require('request');
// var numeral = require('numeral');

module.exports = function (nodecg) {
	var theTitle = nodecg.Replicant('title', "Default Title");
	var theDesc = nodecg.Replicant('desc', "A donation tracker");
	var theTotal = nodecg.Replicant('total', {defaultValue: 0});
	var theGoal = nodecg.Replicant('goal', {defaultValue: 200.00});
	var theType = nodecg.Replicant('widget-type', "donation")
};