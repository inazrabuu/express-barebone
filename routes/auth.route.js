const express = require('express'),
      route = express.Router(),
      authController = require('../controllers/auth.controller'),
      { protect } = require('../middlewares/auth.middleware')

route.post('/login', authController.login)
route.get('/protect', protect, (req, res) => {
  res.success('You are authenticated!')
})

module.exports = route