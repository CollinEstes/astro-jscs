/**
*
* getIgnoreFilePath.js - gets the .jscsrc file of the project
*
**/
var path = require('path')
	, fs = require('fs')
	;

var checkForProjectFile = require('./checkForProjectFile.js');

function getDefault () {
	return path.join(path.dirname(fs.realpathSync(__filename)), '../defaults/.jscsrc');
}

module.exports = function (projectDir) {
	var jscsConfig = checkForProjectFile(projectDir, '.jscsrc')
		;

	if (jscsConfig) {
		return jscsConfig;
	}

	return getDefault();
}();