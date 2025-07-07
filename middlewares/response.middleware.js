module.exports = (req, res, next) => {
  res.success = function(body, status = 200) { 
    return res.status(status).json({
      success: true,
      body
    })
  }

  res.fail = function(message = 'Something went wrong', status = 500) {
    return res.status(status).json({
      success: false,
      error: message
    })
  }

  next()
}