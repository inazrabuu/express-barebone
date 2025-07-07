const utilNumbers = require('../utils/numbers')

function getById(id) {
  const user = {
    id: id,
    name: utilNumbers.toWords(id)
  }

  return user
}

module.exports = {
  getById
}