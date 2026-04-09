const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.property.updateMany({
    where: {
      agentId: null,
    },
    data: {
      agentId: "52ae6a87-540f-461f-8e86-6fe00558f844",
    },
  });

  console.log("✅ Properties updated");
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });