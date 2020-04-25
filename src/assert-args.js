import isArgsDefined from '@bemoje/is-args-defined'
import chalk from 'chalk'

/**
 * Assert that the passed arguments are defined.
 * @method assertArgs
 * @param {...any} args - arguments array
 * @throws {Error} If any passed argument is undefined.
 * @returns {void}
 */
export default function assertArgs(...args) {
	if (!isArgsDefined(...args)) {
		throw new Error(chalk.bold.red(errorMessage))
	}
}
