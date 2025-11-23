import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.pattern.upsert({
    where: { slug: 'pokeball' },
    update: {},
    create: {
      slug: 'pokeball',
      title: 'Pokéball Crochet Pattern',
      description:
        "Free crochet pattern for a Pokéball. Perfect for crocheters who gotta catch 'em all!",
      price: 500, // $5.00
      pdfUrl: '/pdfs/pokeball-pattern.pdf',
    },
  });

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
