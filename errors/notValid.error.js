const customError = require('./custom.error')

class NotValidError extends customError {
  constructor(message, details) {
    super(message, 422)
    this.details = details
  }
}

module.exports = NotValidError