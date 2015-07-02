/**
*
* buildArgs.js - processes the arguments provided
*
**/

var path = require('path')
	, fs = require('fs')
	;

var configFile = require('./getConfigFilePath');

function buildArgs (projectDir, options) {
	var args = [];

	// add projectDir as source
	args.push(projectDir);

	// automatically fix errors (of certain types)
	if(options.fix) {
		args.push('--fix');
	}

	// present standard
	if(options.preset) {
		args.push('--preset=' + options.present);
	}

	// allow es6
	if(options.esnext) {
		args.push('--esnext')
	}

	args.push('--config=' + configFile);

	return args;
}

module.exports = buildArgs;