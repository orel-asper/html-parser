// extractWithRules.test
/* eslint-env jest */

const extractWithRules = require('./extractWithRules')

test('test extractWithRules a bad input', () => {
  const result = extractWithRules(null)
  expect(result).toBe(null)
})
