const customError = require('./customError')

class NotFoundError extends customError {
  constructor(message = 'Resource Not Found') {
    super(message, 404)
  }
}

module.exports = NotFoundError