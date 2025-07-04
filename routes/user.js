const express = require('express'),
      route = express.Router(),
      NotFoundError = require('../errors/notFoundError')

route.get('/:id', async (req, res) => {
  const userId = req.params.id

  if (userId !== '123') {
    throw new NotFoundError('User Not Found!')
  }

  res.json({
    id: userId,
    name: 'One Two Three'
  })
})

module.exports = route