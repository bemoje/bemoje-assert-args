import assertArgs from '../src/assert-args'

describe('assertArgs', () => {
	test('works', () => {
		expect((a, b) => assertArgs(a, b)).toThrow(Error)
		expect((a = 1, b) => assertArgs(a, b)).toThrow(Error)
		expect((a, b = 1) => assertArgs(a, b)).toThrow(Error)
		expect((a = 1, b = 1) => assertArgs(a, b)).not.toThrow(Error)
	})
})
