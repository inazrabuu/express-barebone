const express = require('express'),
      route = express.Router(),
      userController = require('../controllers/user.controller'),
      { advancedLimiter } = require('../middlewares/rateLimit.middleware')

route.get('/me', userController.me)
route.get('/login/:id', userController.login)
route.get('/logout', userController.logout)
route.get('/:id', advancedLimiter, userController.getById)

module.exports = route