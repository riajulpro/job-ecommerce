// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

const categories = [
  { name: "Electronics Devices" },
  { name: "Electronic Accessories" },
  { name: "TV & Home Appliances" },
  { name: "Health & Beauty" },
  { name: "Babies & Toys" },
  { name: "Groceries & Pets" },
  { name: "Home & Lifestyle" },
  { name: "Women’s Fashion" },
  { name: "Men’s Fashion" },
  { name: "Watches & Accessories" },
  { name: "Sports & Outdoor" },
];

async function main() {
  try {
    await database.category.createMany({
      data: categories,
    });

    console.log("Success");
  } catch (error) {
    console.log("Error in seeding categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
