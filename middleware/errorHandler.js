const { logger } = require('./logger')

module.exports = (err, req, res, next) => {
  const isDev = process.env.NODE_ENV !== 'prod'

  logger.error(`${err.name}: ${err.message}`)
  if (err.stack && isDev) {
    logger.error(err.stack)
  }

  const statusCode = err.statusCode || 500,
        message = err.message || 'Internal Server Error'

  res.status(statusCode).json({
    success: false,
    error: {
      name: err.name,
      message: message
    }
  })
}