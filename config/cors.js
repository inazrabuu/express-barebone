const allowedOrigins = process.env.CORS_ORIGIN?.split(',') || ['http://locahost:3333']

module.exports = {
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  },
  credentials: true
}