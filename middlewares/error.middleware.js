const { logger } = require('./logger.middleware')

module.exports = (err, req, res, next) => {
  const isDev = process.env.NODE_ENV !== 'prod'

  logger.error(`${err.name}: ${err.message}`)
  if (err.stack && isDev) {
    logger.error(err.stack)
  }

  const statusCode = err.statusCode || 500,
        message = err.message || 'Internal Server Error'

  let body = {
    name: err.name,
    message: message
  }

  if (err.details)
    body.details = err.details

  res.fail(body, statusCode)
}