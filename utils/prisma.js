const { PrismaClient } = require('@prisma/client'),
      prisma = new PrismaClient()

async function initPrisma() {
  try {
    const dbUrl = process.env.DATABASE_URL
    let dbType = 'Unknown'

    await prisma.$connect()

    if (dbUrl.startsWith('postgres')) dbType = 'Postgresql'
    else if (dbUrl.startsWith('mysql')) dbType = 'MySql'
    else if (dbUrl.startsWith('sqlite')) dbType = 'SQLite'
    else if (dbUrl.startsWith('sqlserver')) dbType = 'SQL Server'
    else if (dbUrl.startsWith('mongo')) dbType = 'MongoDB'

    console.log(`✅ ${dbType} connected via Prisma`)
  } catch (err) {
    console.error('❌ Failed to connect to database:', err)
    process.exit(1)
  }
}

initPrisma()

module.exports = prisma