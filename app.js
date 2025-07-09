require('express-async-errors')

const express = require('express'),
      app = express()

const helmet = require('helmet'),
      cors = require('cors'),
      cookieParser = require('cookie-parser'),
      errorHandler = require('./middlewares/error.middleware'),
      { morganMiddleware } = require('./middlewares/logger.middleware'),
      sessionMiddleware = require('./middlewares/session.middleware'),
      { basicLimiter } = require('./middlewares/rateLimit.middleware'),
      responseWrapper = require('./middlewares/response.middleware')

app.use(cors(require('./config/cors')))
app.use(helmet(require('./config/helmet')))
app.use(express.json())
app.use(cookieParser())
app.use(responseWrapper)
app.use(morganMiddleware)
app.use(basicLimiter)
app.use(sessionMiddleware)

require('./routes')(app)

app.use(errorHandler)

module.exports = app