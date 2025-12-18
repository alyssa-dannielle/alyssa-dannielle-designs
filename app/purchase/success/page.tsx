import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import SuccessPageClient from './SuccessPageClient';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const sessionId = searchParams.session_id;

  if (!sessionId) {
    notFound();
  }

  // Find the purchase by Stripe session ID
  const purchase = await prisma.purchase.findUnique({
    where: { stripeSessionId: sessionId },
    include: { pattern: true },
  });

  return <SuccessPageClient purchase={purchase} />;
}
