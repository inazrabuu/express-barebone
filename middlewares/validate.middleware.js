const { validationResult } = require('express-validator'),
      { notValidError } = require('../errors')

module.exports = function validateRequest(req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw new notValidError('Validation Error', errors.array().map(e => ({
      field: e.path,
      message: e.msg
    })))
  }

  next()
}