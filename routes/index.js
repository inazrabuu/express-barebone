const express = require('express'),
      route = express.Router()

route.get('/', async (req, res) => {
  res.json({
    success: true,
    message: 'API'
  })
})

module.exports = route