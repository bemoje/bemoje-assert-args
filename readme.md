# @bemoje/assert-args

Assert that the passed arguments are defined.

#### Version

<span><a href="https://npmjs.org/@bemoje/assert-args" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/assert-args" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/assert-args" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-assert-args.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/assert-args" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-assert-args.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/assert-args" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/assert-args" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-assert-args/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-assert-args" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/assert-args
npm install --save @bemoje/assert-args
npm install --save-dev @bemoje/assert-args
```

## Usage

```javascript
import assertArgs from '@bemoje/assert-args'

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

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### assertArgs

Assert that the passed arguments are defined.

##### Parameters

-   `args` **...any** arguments array

-   Throws **[Error][3]** If any passed argument is undefined.

##### Returns
**void** 

[1]: #assertargs

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error