// absolutifyUrl.test
/* eslint-env jest */

const absolutifyUrl = require('./absolutifyUrl')

test('test absolutifyUrl a bad input', () => {
  const result = absolutifyUrl(null, '')
  expect(result).toBe('')
})
