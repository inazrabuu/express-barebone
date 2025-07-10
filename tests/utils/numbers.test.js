const { toWords } = require('../../utils/numbers')

describe('Numbers to worlds', () => {
  it('Returns literal words based on numbers', () => {
    let words = 'Seven Six Zero'
    expect(toWords(760)).toBe(words)
  })
})