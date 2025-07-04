const rateLimit = require('express-rate-limit'),
      { RateLimiterRedis } = require('rate-limiter-flexible'),
      Redis = require('ioredis')

const redisClient = new Redis({
  host: '127.0.0.1',
  port: 6379,
  enableOfflineQueue: false
})

const basicLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeader: true,
  legacyHeaders: false,
  message: 'Too many requests, please try again later'
})

const redisLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'rate-limit',
  points: 10,
  duration: 60
})

const advancedLimiter = (req, res, next) => {
  const key = req.ip

  redisLimiter.consume(key)
    .then(() => {
      next()
    })
    .catch(() => {
      res.status(429).json({
        success: false,
        message: 'Too many requests, please slow down!'
      })
    })
}

module.exports = {
  basicLimiter,
  advancedLimiter
}