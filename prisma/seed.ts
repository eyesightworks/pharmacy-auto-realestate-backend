import { PrismaClient, Role } from '@prisma/client'
import * as bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // -----------------------------
  // ADMIN USER
  // -----------------------------
  const adminEmail = 'admin@system.local'

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  })

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('Admin@123', 10)

    await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        role: Role.ADMIN,
      },
    })

    console.log('✅ Admin user created')
  } else {
    console.log('ℹ️ Admin user already exists')
  }

  // -----------------------------
  // PRODUCTS (Pharmacy)
  // -----------------------------
  await prisma.product.createMany({
    data: [
      { name: 'Paracetamol', price: 2.5 },
      { name: 'Ibuprofen', price: 3.0 },
    ],
    skipDuplicates: true,
  })

  // -----------------------------
  // VEHICLES (Automobile)
  // -----------------------------
  await prisma.vehicle.createMany({
    data: [
      { brand: 'Toyota', price: 15000 },
      { brand: 'Honda', price: 14000 },
    ],
    skipDuplicates: true,
  })

  // -----------------------------
  // PROPERTIES (Real Estate)
  // -----------------------------
  await prisma.property.createMany({
    data: [
      { title: '2 Bedroom Apartment', price: 85000 },
      { title: 'Office Space', price: 120000 },
    ],
    skipDuplicates: true,
  })

  console.log('🌱 Seeding completed')
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
