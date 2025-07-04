module.exports = (err, req, res, next) => {
  console.error(err)

  const statusCode = err.statusCode || 500,
        message = err.message || 'Internal Server Error'

  res.status(statusCode).json({
    success: false,
    error: {
      name: err.name,
      message: message
    }
  })
}