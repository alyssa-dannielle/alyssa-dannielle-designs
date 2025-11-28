import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.pattern.upsert({
    where: { slug: 'pokeball' },
    update: {
      price: 199, // $1.99 - UPDATE existing records
    },
    create: {
      slug: 'pokeball',
      title: 'Pokéball Crochet Pattern',
      description:
        "Free crochet pattern for a Pokéball. Perfect for crocheters who gotta catch 'em all!",
      price: 199, // $1.99
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
