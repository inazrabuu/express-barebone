const indexRoute = require('./index.route'),
      authRoute = require('./auth.route'),
      userRoute = require('./user.route')

module.exports = (app) => {
  app.use('/api/', indexRoute)
  app.use('/api/auth', authRoute)
  app.use('/api/users', userRoute)
}