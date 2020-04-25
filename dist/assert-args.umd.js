(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/is-args-defined'), require('chalk')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/is-args-defined', 'chalk'], factory) :
	(global = global || self, global['assert-args'] = factory(global.isArgsDefined, global.chalk));
}(this, (function (isArgsDefined, chalk) { 'use strict';

	isArgsDefined = isArgsDefined && isArgsDefined.hasOwnProperty('default') ? isArgsDefined['default'] : isArgsDefined;
	chalk = chalk && chalk.hasOwnProperty('default') ? chalk['default'] : chalk;

	/**
	 * Assert that the passed arguments are defined.
	 * @method assertArgs
	 * @param {...any} args - arguments array
	 * @throws {Error} If any passed argument is undefined.
	 * @returns {void}
	 */
	function assertArgs(...args) {
		if (!isArgsDefined(...args)) {
			throw new Error(chalk.bold.red(errorMessage))
		}
	}

	return assertArgs;

})));
