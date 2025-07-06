const express = require('express'),
      route = express.Router(),
      indexController = require('../controllers/indexController')

route.get('/', indexController.index)

module.exports = route