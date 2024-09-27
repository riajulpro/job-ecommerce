const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const database = new PrismaClient();

async function main() {
  // Create users
  const user1 = await database.user.create({
    data: {
      email: "user1@example.com",
      password: "password123", // Hash this in production!
      name: faker.name.fullName(),
      role: "customer",
    },
  });

  const user2 = await database.user.create({
    data: {
      email: "user2@example.com",
      password: "password123", // Hash this in production!
      name: faker.name.fullName(),
      role: "customer",
    },
  });

  // Create products
  const products = [
    {
      name: "Smartphone",
      description: faker.commerce.productDescription(),
      brandName: "Brand A",
      oldPrice: 499.99,
      newPrice: 399.99,
      sizes: ["M", "L"],
      colors: ["Black", "White"],
      thumbnails: [
        faker.image.urlPicsumPhotos(),
        faker.image.urlPicsumPhotos(),
      ],
      ratings: 4.5,
      categoryId: "66f4e1592ad334de3fc4b15e",
    },
    {
      name: "Laptop",
      description: faker.commerce.productDescription(),
      brandName: "Brand B",
      oldPrice: 1299.99,
      newPrice: 1099.99,
      sizes: ['13"', '15"'],
      colors: ["Gray", "Silver"],
      thumbnails: [
        faker.image.urlPicsumPhotos(),
        faker.image.urlPicsumPhotos(),
      ],
      ratings: 4.7,
      categoryId: "66f4e1592ad334de3fc4b15e",
    },
    {
      name: "Wireless Earbuds",
      description: faker.commerce.productDescription(),
      brandName: "Brand C",
      oldPrice: 149.99,
      newPrice: 119.99,
      sizes: ["Standard"],
      colors: ["White", "Black"],
      thumbnails: [
        faker.image.urlPicsumPhotos(),
        faker.image.urlPicsumPhotos(),
      ],
      ratings: 4.3,
      categoryId: "66f4e1592ad334de3fc4b15e",
    },
    {
      name: "Smartwatch",
      description: faker.commerce.productDescription(),
      brandName: "Brand D",
      oldPrice: 299.99,
      newPrice: 249.99,
      sizes: ["Standard"],
      colors: ["Black", "Gold"],
      thumbnails: [
        faker.image.urlPicsumPhotos(),
        faker.image.urlPicsumPhotos(),
      ],
      ratings: 4.6,
      categoryId: "66f4e1592ad334de3fc4b15e",
    },
    {
      name: "Bluetooth Speaker",
      description: faker.commerce.productDescription(),
      brandName: "Brand E",
      oldPrice: 199.99,
      newPrice: 159.99,
      sizes: ["Small", "Large"],
      colors: ["Red", "Black"],
      thumbnails: [
        faker.image.urlPicsumPhotos(),
        faker.image.urlPicsumPhotos(),
      ],
      ratings: 4.4,
      categoryId: "66f4e1592ad334de3fc4b15e",
    },
    {
      name: "T-shirt",
      description: faker.commerce.productDescription(),
      brandName: "Brand F",
      oldPrice: 29.99,
      newPrice: 19.99,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue"],
      thumbnails: [
        faker.image.urlPicsumPhotos(),
        faker.image.urlPicsumPhotos(),
      ],
      ratings: 4.2,
      categoryId: "66f4e1592ad334de3fc4b15b",
    },
    {
      name: "Jeans",
      description: faker.commerce.productDescription(),
      brandName: "Brand G",
      oldPrice: 79.99,
      newPrice: 59.99,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Blue", "Black"],
      thumbnails: [
        faker.image.urlPicsumPhotos(),
        faker.image.urlPicsumPhotos(),
      ],
      ratings: 4.3,
      categoryId: "66f4e1592ad334de3fc4b15b",
    },
    {
      name: "Sneakers",
      description: faker.commerce.productDescription(),
      brandName: "Brand H",
      oldPrice: 119.99,
      newPrice: 89.99,
      sizes: ["7", "8", "9", "10"],
      colors: ["White", "Black"],
      thumbnails: [
        faker.image.urlPicsumPhotos(),
        faker.image.urlPicsumPhotos(),
      ],
      ratings: 4.5,
      categoryId: "66f4e1592ad334de3fc4b15b",
    },
    {
      name: "Jacket",
      description: faker.commerce.productDescription(),
      brandName: "Brand I",
      oldPrice: 149.99,
      newPrice: 129.99,
      sizes: ["S", "M", "L"],
      colors: ["Green", "Brown"],
      thumbnails: [
        faker.image.urlPicsumPhotos(),
        faker.image.urlPicsumPhotos(),
      ],
      ratings: 4.4,
      categoryId: "66f4e1592ad334de3fc4b15b",
    },
    {
      name: "Dress",
      description: faker.commerce.productDescription(),
      brandName: "Brand J",
      oldPrice: 99.99,
      newPrice: 79.99,
      sizes: ["S", "M", "L"],
      colors: ["Pink", "Red"],
      thumbnails: [
        faker.image.urlPicsumPhotos(),
        faker.image.urlPicsumPhotos(),
      ],
      ratings: 4.6,
      categoryId: "66f4e1592ad334de3fc4b15b",
    },
  ];

  // Add reviews to each product
  for (const product of products) {
    await database.product.create({
      data: {
        ...product,
        reviews: {
          create: [
            {
              rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1-5
              comment: faker.lorem.sentences(),
              userId: user1.id,
            },
            {
              rating: Math.floor(Math.random() * 5) + 1,
              comment: faker.lorem.sentences(),
              userId: user2.id,
            },
          ],
        },
      },
    });
  }
}

main()
  .then(async () => {
    await database.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await database.$disconnect();
    process.exit(1);
  });
