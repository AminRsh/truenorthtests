// prisma-test.ts
import { PrismaClient } from './src/generated/prisma';

async function test() {
    console.log('Creating Prisma client...');
    const prisma = new PrismaClient();
    console.log('Prisma client created successfully');

    try {
        // Attempt a simple query
        const result = await prisma.$queryRaw`SELECT 1+1 as result`;
        console.log('Query succeeded:', result);
    } catch (err) {
        console.error('Query failed:', err);
    } finally {
        await prisma.$disconnect();
    }
}

test().catch(e => {
    console.error('Test failed with error:', e);
    process.exit(1);
});