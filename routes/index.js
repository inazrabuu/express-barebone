const express = require('express'),
      route = express.Router()

route.get('/', async (req, res) => {
  res.success({
    message: 'API'
  })
})

module.exports = route