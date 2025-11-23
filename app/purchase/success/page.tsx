import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';

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

  if (!purchase) {
    return (
      <div className='mx-auto max-w-2xl px-4 py-16'>
        <div className='rounded-lg border border-yellow-200 bg-yellow-50 p-6'>
          <h1 className='mb-2 text-2xl font-bold text-yellow-800'>
            Payment Processing
          </h1>
          <p className='text-yellow-700'>
            Your payment is being processed. Please check your email for the
            download link, or refresh this page in a few moments.
          </p>
        </div>
      </div>
    );
  }

  const downloadsRemaining = purchase.maxDownloads - purchase.downloadCount;
  const expiresAt = new Date(purchase.expiresAt).toLocaleDateString();

  return (
    <div className='mx-auto max-w-2xl px-4 py-16'>
      <div className='rounded-lg border border-green-200 bg-green-50 p-6'>
        <h1 className='mb-4 text-3xl font-bold text-green-800'>
          🎉 Thank You for Your Purchase!
        </h1>
        <p className='mb-6 text-green-700'>
          Your payment was successful. You can now download your pattern.
        </p>

        <div className='mb-6 rounded-lg bg-white p-4'>
          <h2 className='mb-2 text-xl font-semibold'>
            {purchase.pattern.title}
          </h2>
          <p className='mb-4 text-sm text-gray-600'>
            Sent to: {purchase.customerEmail}
          </p>

          <a
            href={`/api/download/${purchase.id}`}
            className='inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700'
          >
            Download PDF
          </a>

          <div className='mt-4 text-sm text-gray-600'>
            <p>
              • Downloads remaining: {downloadsRemaining} of{' '}
              {purchase.maxDownloads}
            </p>
            <p>• Link expires: {expiresAt}</p>
          </div>
        </div>

        <div className='rounded-lg bg-blue-50 p-4 text-sm text-blue-800'>
          <p className='font-semibold'>💡 Tip:</p>
          <p>
            Save this link or check your email! You can download this pattern up
            to {purchase.maxDownloads} times before {expiresAt}.
          </p>
        </div>
      </div>
    </div>
  );
}
