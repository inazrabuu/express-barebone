const bcrypt = require('bcryptjs'),
      jwtUtils = require('../utils/jwt'),
      userService = require('../services/user.service'),
      notAuthError = require('../errors/notAuth.error')

exports.login = async (req, res) => {
  const { email, password } = req.body

  const user = await userService.getByEmail(email)
  if (!user) throw new notAuthError('Invalid email / password')

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) throw new notAuthError('Invalid email / password')

  const token = jwtUtils.signToken({
    id: user.id,
    email: user.email
  })

  res.success({
    token
  })
}