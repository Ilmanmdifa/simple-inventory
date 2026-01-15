import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const demoUserId = "9def617c-3149-426f-91a0-935dda5fd546";

  //create example data
  await prisma.product.createMany({
    data: Array.from({ length: 25 }).map((_, index) => ({
      userId: demoUserId,
      name: `Demo Product ${index + 1}`,
      price: (Math.random() * 100 + 10).toFixed(2),
      quantity: Math.floor(Math.random() * 20),
      lowStockAt: 5,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (index * 5)),
    })),
  });

  console.log("Seed data created successfully");
  console.log(`Created 25 products for user ID: ${demoUserId}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
