const userService = require('../services/user.service'),
      { notFoundError, notAuthError } = require('../errors')

exports.me = async (req, res) => {
  if (!req.session.userId) {
    throw new notAuthError('Not logged in')
  }

  res.success({
    user: req.session.userId
  })
}

exports.login = (req, res, next) => {
  req.session.userId = req.params.id
  
  req.session.save((err) => {
    if (err) return next(err)

    res.success({
      message: `Login for ${req.session.userId} is successful`
    })
  })
}

exports.logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err)

    res.clearCookie('connect.sid') // default cookie name
    res.success({
      message: 'Logged out successfully' 
    })
  })
}

exports.getById = async (req, res) => {
  const user = userService.getById(req.params.id)

  if (user.id !== '123') {
    throw new notFoundError('User Not Found!')
  }

  res.success({
    id: user.id,
    name: user.name
  })
}