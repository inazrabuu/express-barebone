const prisma = require('../config/prisma'),
      utilNumbers = require('../utils/numbers')

async function getByEmail(email) {
  return await prisma.user.findUnique({
    where: { email }
  }) 
}

async function create(userData) {
  return await prisma.user.create({
    data: userData
  })
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
  create,
  getById
}