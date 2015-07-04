/**
*
* astroJshintSpce.js - main test
*
**/

var astroJshint = require('../')
	, cwd = '/test';

describe('astro-jscs', function () {

	it('should return command as jscs', function () {
		var result = astroJshint(cwd, {});
		expect(result.cmd.indexOf('astro-jscs/node_modules/.bin/jscs')).to.not.equal(-1);
	});

});