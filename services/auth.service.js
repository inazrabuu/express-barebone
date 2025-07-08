const Redis = require('../config/redis')

const REFRESH_TOKEN_PREFIX = 'refresh_token:',
      EXPIRY_SECONDS = 7 * 24 * 60 * 60

exports.saveRefreshToken = async (userId, token) => {
  const key = `${REFRESH_TOKEN_PREFIX}${userId}`
  await Redis.set(key, token, 'EX', EXPIRY_SECONDS)
}

exports.getRefreshToken = async (userId) => {
  const key = `${REFRESH_TOKEN_PREFIX}${userId}`
  return await Redis.get(key)
}

exports.deleteRefreshToken = async (userId) => {
  const key = `${REFRESH_TOKEN_PREFIX}${userId}`
  await Redis.del(key)
}