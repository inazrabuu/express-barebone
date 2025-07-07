const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || 'define-jwt-secret-here'
const JWT_EXPIRES_IN = '1h'

exports.signToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

exports.verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET)
}