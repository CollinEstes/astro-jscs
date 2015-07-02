/**
*
* buildArgs.js - processes the arguments provided
*
**/

var path = require('path')
	, fs = require('fs')
	;

var getConfigFile = require('./getConfigFile');

function buildArgs (projectDir, options) {
	var args = [];

	// add projectDir as source
	args.push(projectDir);

	if(options.fix) {
		args.push('--fix');
	}

	return args;
}

module.exports = buildArgs;