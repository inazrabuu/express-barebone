const CustomError = require('./custom.error')

class NotAuthError extends CustomError {
  constructor(message = 'Not Authenticated') {
    super(message, 401)
  }
}

module.exports = NotAuthError