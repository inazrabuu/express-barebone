const rateLimit = require('express-rate-limit'),
      { RateLimiterRedis } = require('rate-limiter-flexible'),
      redisClient = require('../config/redis')

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
  duration: 60,
  blockDuration: 60
})

const advancedLimiter = async (req, res, next) => {
  const key = req.ip

  try {
    await redisLimiter.consume(key)
    next()
  } catch (rateLimiterRes) {
    const retrySecs = Math.round(rateLimiterRes.msBeforeNext / 1000) || 1

    res.set('Retry-After', retrySecs)
    res.status(429).json({
      success: false,
      message: `Too many requests, please try again in ${retrySecs} second(s)!`
    })
  }
}

module.exports = {
  basicLimiter,
  redisLimiter,
  advancedLimiter
}