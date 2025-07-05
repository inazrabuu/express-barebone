const express = require('express'),
      route = express.Router(),
      NotFoundError = require('../errors/notFoundError'),
      { advancedLimiter } = require('../middleware/rateLimit')

route.get('/:id', advancedLimiter, async (req, res) => {
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