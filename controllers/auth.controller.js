const bcrypt = require('bcryptjs'),
      jwtUtils = require('../utils/jwt'),
      userService = require('../services/user.service'),
      authService = require('../services/auth.service'),
      { notAuthError, customError } = require('../errors')

exports.login = async (req, res) => {
  const { email, password } = req.body

  const user = await userService.getByEmail(email)
  if (!user) throw new notAuthError('Invalid email / password')

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) throw new notAuthError('Invalid email / password')

  const payload = {
    id: user.id,
    email: user.email
  }

  const token = jwtUtils.signToken(payload)
  const refreshToken = jwtUtils.signRefreshToken(payload)

  await authService.saveRefreshToken(user.id, refreshToken)

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV == 'prod',
    maxAge: 7 * 24 * 60 * 60
  })

  res.success({
    token
  })
}

exports.refreshToken = async (req, res) => {
  const token = req.cookies.refreshToken

  if (!token)
    throw new notAuthError('Token not found')

  try {
    const decoded = jwtUtils.verifyRefreshToken(token)
    const stored = await authService.getRefreshToken(decoded.id)
    if (!stored || stored !== token) {
      throw new notAuthError('Refresh token invalid or expired')
    }

    const newToken = jwtUtils.signToken({
      id: decoded.id,
      email: decoded.email
    })

    res.success({newToken})
  } catch (err) {
    throw new notAuthError('Refresh token failed')
  }
}

exports.logout = async (req, res) => {
  const token = req.cookies.refreshToken
  if (!token) return res.sendStatus(204)

  try {
    const decoded = jwtUtils.verifyRefreshToken(token)
    await authService.deleteRefreshToken(decoded.id)
  } catch (err) {
    throw new customError(err)
  }

  res.clearCookie('refreshToken', {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'prod'
  })

  res.sendStatus(204)
}