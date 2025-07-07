require('express-async-errors')

const express = require('express'),
      app = express()

const helmet = require('helmet'),
      cors = require('cors'),
      indexRoute = require('./routes/index.route'),
      userRoute = require('./routes/user.route'),
      authRoute = require('./routes/auth.route'),
      errorHandler = require('./middlewares/error.middleware'),
      { morganMiddleware } = require('./middlewares/logger.middleware'),
      sessionMiddleware = require('./middlewares/session.middleware'),
      { basicLimiter } = require('./middlewares/rateLimit.middleware'),
      responseWrapper = require('./middlewares/response.middleware')

app.use(cors(require('./config/cors')))
app.use(helmet(require('./config/helmet')))
app.use(express.json())
app.use(responseWrapper)
app.use(morganMiddleware)
app.use(basicLimiter)
app.use(sessionMiddleware)

app.use('/api/', indexRoute)
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)

app.use(errorHandler)

module.exports = app