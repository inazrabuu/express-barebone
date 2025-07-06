const express = require('express'),
      route = express.Router(),
      NotFoundError = require('../errors/notFoundError'),
      { advancedLimiter } = require('../middleware/rateLimit')

route.get('/me', (req, res) => {
  if (!req.session.userId) {
    throw new NotFoundError('Not logged in')
  }

  res.success({
    user: req.session.userId
  })
})

route.get('/login/:id', (req, res, next) => {
  req.session.userId = req.params.id
  
  req.session.save((err) => {
    if (err) return next(err)

    res.success({
      message: `Login for ${req.session.userId} is successful`
    })
  })
})

route.get('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err)

    res.clearCookie('connect.sid') // default cookie name
    res.success({
      message: 'Logged out successfully' 
    })
  })
})

route.get('/:id', advancedLimiter, async (req, res) => {
  const userId = req.params.id

  if (userId !== '123') {
    throw new NotFoundError('User Not Found!')
  }

  res.success({
    id: userId,
    name: 'One Two Three'
  })
})

module.exports = route