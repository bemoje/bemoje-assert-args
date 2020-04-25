import assertArgs from '../src/assert-args'

/**
 * Adds a and b and throws Error if any parameters are missing
 */
function add(a, b) {
	assertArgs(a, b)
	return a + b
}

/**
 * Calls the callback and returns true if the callback throws an error and false otherwise.
 */
function didItThrow(callback) {
	try {
		callback()
		return false
	} catch (e) {
		return true
	}
}

didItThrow(() => add(1, 4))
//=> false

didItThrow(() => add(1))
//=> true
