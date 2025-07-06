const session = require('express-session'),
      { RedisStore } = require('connect-redis'),
      { createClient } = require('redis')

const redisClient = createClient()
redisClient.connect().catch(console.error)

const sessionMiddleware = session({
  store: new RedisStore({
    client: redisClient,
    legacyMode: true
  }),
  secret: process.env.SESSION_SECRET || 'please-change-the-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set true if using HTTPS
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24
  }
})

module.exports = sessionMiddleware