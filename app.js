require('express-async-errors')

const express = require('express'),
      app = express()

const indexRoute = require('./routes/index'),
      userRoute = require('./routes/user'),
      errorHandler = require('./middleware/errorHandler'),
      { morganMiddleware } = require('./middleware/logger'),
      sessionMiddleware = require('./middleware/session'),
      { basicLimiter } = require('./middleware/rateLimit'),
      responseWrapper = require('./middleware/responseWrapper')

app.use(express.json())
app.use(responseWrapper)
app.use(morganMiddleware)
app.use(basicLimiter)
app.use(sessionMiddleware)

app.use('/api/', indexRoute)
app.use('/api/users', userRoute)

app.use(errorHandler)

module.exports = app