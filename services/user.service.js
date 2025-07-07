const utilNumbers = require('../utils/numbers')

const users = [
  {
    id: 1,
    email: 'admin@mail.com',
    password: '$2b$10$2auSKiRFVpNyWw7RL6USHOOtaQM0pnDbdTulsp1iGx6eMAHGwEGlK'
  }
]

async function getByEmail(email) {
  return users.find((u) => u.email === email)
}

function getById(id) {
  const user = {
    id: id,
    name: utilNumbers.toWords(id)
  }

  return user
}

module.exports = {
  getByEmail,
  getById
}