
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: 'admin',
      last: 'admin',
      role: 'admin',
      password: '$2b$10$neFaBIIpVfPijWst8aga0.mrKdId2aUnkpBfMcHDr.GpzMFdIXx8W',
      username: 'admin'
    }
  });
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
