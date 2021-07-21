import { PrismaClient } from "../src";

const prisma = new PrismaClient();

const product = {
  name: "Test Product",
  description: "Test Product",
};

const productImage = {
  name: "Test variant image",
  url: "https://via.placeholder.com/150",
};

const variant = {
  name: "Test variant",
  description: "Test variant",
};

async function seed(): Promise<void> {
  const newProduct = await prisma.product.upsert({
    where: {
      id: 1,
    },
    update: {
      ...product,
    },
    create: {
      ...product,
      variants: {
        create: {
          ...variant,
          images: {},
        },
      },
      images: {
        create: {
          ...productImage,
        },
      },
    },
  });
  // eslint-disable-next-line no-console
  console.log("Created:", newProduct);
}

seed()
  .catch(() => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
