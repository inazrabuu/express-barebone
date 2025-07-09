const { PrismaClient } = require('@prisma/client'),
      bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  const password = await bcrypt.hash('password123', 10)

  await prisma.user.upsert({
    where: {
      email: 'admin@mail.com'
    },
    update: {},
    create: {
      email: 'admin@mail.com',
      password
    }
  })

  console.log('Seed finished ✅')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())