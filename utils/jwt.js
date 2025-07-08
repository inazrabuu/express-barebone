const jwt = require('jsonwebtoken')

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'define-access-secret-here',
      JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'define-refresh-secret-here',
      JWT_ACCESS_EX = '15m',
      JWT_REFRESH_EX = '7d'

exports.signToken = (payload) => {
  return jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: JWT_ACCESS_EX })
}

exports.signRefreshToken = (payload) => {
  return jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: JWT_REFRESH_EX})
}

exports.verifyToken = (token) => {
  return jwt.verify(token, JWT_ACCESS_SECRET)
}

exports.verifyRefreshToken = (token) => {
  return jwt.verify(token, JWT_REFRESH_SECRET)
}