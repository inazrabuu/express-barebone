const express = require('express'),
      route = express.Router(),
      { indexController } = require('../controllers')

route.get('/', indexController.index)
route.get('/healthz', indexController.healthz)

module.exports = route