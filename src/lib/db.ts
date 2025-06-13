import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Test database connection
export async function testDatabaseConnection() {
  try {
    await prisma.$connect()
    console.log('Database connection successful')
    
    // Test query
    const userCount = await prisma.user.count()
    console.log(`Number of users in database: ${userCount}`)
    
    return true
  } catch (error) {
    console.error('Database connection test failed:', error)
    return false
  }
} 