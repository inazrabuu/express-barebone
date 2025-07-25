const jwtUtils = require('../utils/jwt'),
      { notAuthError } = require('../errors')

exports.protect = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new notAuthError()
  }

  const token = authHeader.split(' ')[1]

  try { 
    const decoded = jwtUtils.verifyToken(token)
    req.user = decoded
    next()
  } catch(err) {
    throw new notAuthError('Invalid or expired token')
  }
}