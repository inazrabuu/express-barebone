const projectName = process.env.npm_package_name,
      prisma = require('../config/prisma')

exports.index = async (req, res) => {
  res.success({
    message: `${projectName}`
  })
}

exports.healthz = async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`

    res.success({
      status: '✅ OK',
      database: '✅ connected',
      uptime: process.uptime(),
      timestamp: new Date()
    })
  } catch (err) {
    console.error('❌ DB health check failed:', err)

    res.fail({
      status: '❌ Not OK',
      database: '❌ disconnected',
      message: err.message
    })
  }
}