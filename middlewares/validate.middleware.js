const { validationResult } = require('express-validator'),
      NotValidError = require('../errors/notValid.error')

module.exports = function validateRequest(req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    // return res.fail(errors.array().map(e => ({
    //   field: e.path,
    //   message: e.msg
    // })), 422)

    throw new NotValidError('Validation Error', errors.array().map(e => ({
      field: e.path,
      message: e.msg
    })))
  }

  next()
}