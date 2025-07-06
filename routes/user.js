const express = require('express'),
      route = express.Router(),
      userController = require('../controllers/userController'),
      { advancedLimiter } = require('../middleware/rateLimit')

route.get('/me', userController.me)
route.get('/login/:id', userController.login)
route.get('/logout', userController.logout)
route.get('/:id', advancedLimiter, userController.getById)

module.exports = route