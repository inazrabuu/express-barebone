const projectName = process.env.npm_package_name
exports.index = async (req, res) => {
  res.success({
    message: `${projectName}`
  })
}

exports.healthz = (req, res) => {
  res.success({
    status: 'OK',
    uptime: process.uptime()
  })
}