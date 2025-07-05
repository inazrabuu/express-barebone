require('express-async-errors')

const express = require('express'),
      app = express()

const indexRoute = require('./routes/index'),
      userRoute = require('./routes/user'),
      errorHandler = require('./middleware/errorHandler'),
      { morganMiddleware } = require('./middleware/logger'),
      { basicLimiter } = require('./middleware/rateLimit')

app.use(express.json())
app.use(morganMiddleware)
app.use(basicLimiter)
app.use('/api/', indexRoute)
app.use('/api/users', userRoute)

app.use(errorHandler)

module.exports = app