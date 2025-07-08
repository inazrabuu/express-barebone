const express = require('express'),
      route = express.Router(),
      authController = require('../controllers/auth.controller'),
      { protect } = require('../middlewares/auth.middleware'),
      validateRequest = require('../middlewares/validate.middleware'),
      { loginValidator } = require('../validators/auth.validator')

route.post('/login', loginValidator, validateRequest, authController.login)
route.get('/logout', protect, authController.logout)
route.get('/refresh_token', protect, authController.refreshToken)
route.get('/protect', protect, (req, res) => {
  res.success('You are authenticated!')
})

module.exports = route