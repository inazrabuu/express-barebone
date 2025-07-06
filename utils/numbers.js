exports.toWords = (number) => {
  let returnValue = ''

  const map = {
    0: 'Zero',
    1: 'One',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  }

  let n = typeof number !== 'string' ? number.toString() : number

  for (let c of n) {
    returnValue += `${map[c].charAt(0).toUpperCase() + map[c].slice(1)} `
  }

  return returnValue.trim()
}