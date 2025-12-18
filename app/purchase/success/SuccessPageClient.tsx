'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Purchase {
  id: string;
  customerEmail: string;
  downloadCount: number;
  maxDownloads: number;
  pattern: {
    title: string;
  };
}

function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className='mt-4 w-full rounded-lg border-2 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-800 px-6 py-3 font-semibold text-blue-600 dark:text-blue-400 transition-colors hover:bg-blue-50 dark:hover:bg-gray-700'
    >
      {copied ? '✓ Link Copied!' : '📋 Copy Download Link'}
    </button>
  );
}

export default function SuccessPageClient({
  purchase: initialPurchase,
}: {
  purchase: Purchase | null;
}) {
  const router = useRouter();
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 10;

  // Auto-refresh if no purchase yet
  useEffect(() => {
    if (!initialPurchase && retryCount < maxRetries) {
      const timer = setTimeout(() => {
        router.refresh();
        setRetryCount((prev) => prev + 1);
      }, 2000); // Check every 2 seconds

      return () => clearTimeout(timer);
    }
  }, [initialPurchase, retryCount, router]);

  if (!initialPurchase) {
    return (
      <div className='mx-auto max-w-2xl px-4 py-16'>
        <div className='rounded-lg border border-yellow-200 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/30 p-6'>
          <h1 className='mb-2 text-2xl font-bold text-yellow-800 dark:text-yellow-200'>
            Payment Processing
          </h1>
          <p className='text-yellow-700 dark:text-yellow-300 mb-4'>
            Your payment is being processed. This page will automatically
            refresh when ready...
          </p>
          <div className='flex items-center justify-center'>
            <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-800 dark:border-yellow-200'></div>
          </div>
          <p className='text-sm text-yellow-600 dark:text-yellow-400 mt-4 text-center'>
            Checking... (Attempt {retryCount + 1} of {maxRetries})
          </p>
        </div>
      </div>
    );
  }

  const downloadsRemaining =
    initialPurchase.maxDownloads - initialPurchase.downloadCount;
  const downloadUrl = `${typeof window !== 'undefined' ? window.location.origin : 'https://alyssadannielle.design'}/api/download/${initialPurchase.id}`;

  return (
    <div className='mx-auto max-w-2xl px-4 py-16'>
      <div className='rounded-lg border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/30 p-6'>
        <h1 className='mb-4 text-3xl font-bold text-green-800 dark:text-green-200'>
          🎉 Thank You for Your Purchase!
        </h1>
        <p className='mb-6 text-green-700 dark:text-green-300'>
          Your payment was successful. Your download is ready!
        </p>

        <div className='mb-6 rounded-lg bg-white dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700'>
          <h2 className='mb-2 text-xl font-semibold dark:text-white'>
            {initialPurchase.pattern.title}
          </h2>
          <p className='mb-4 text-sm text-gray-600 dark:text-gray-400'>
            Confirmation sent to: {initialPurchase.customerEmail}
          </p>

          <a
            href={`/api/download/${initialPurchase.id}`}
            download
            className='inline-block w-full text-center rounded-lg bg-cyan-800 dark:bg-cyan-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-yellow-500 dark:hover:bg-yellow-400 transform hover:scale-105 duration-200'
          >
            📥 Download PDF Now
          </a>

          <CopyLinkButton url={downloadUrl} />

          <div className='mt-6 text-sm text-gray-600 dark:text-gray-400'>
            <p>
              • Downloads remaining:{' '}
              <span className='font-semibold text-gray-800 dark:text-gray-200'>
                {downloadsRemaining}
              </span>{' '}
              of {initialPurchase.maxDownloads}
            </p>
          </div>
        </div>

        <div className='rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 p-4 text-sm text-blue-800 dark:text-blue-200'>
          <p className='font-semibold mb-2'>💡 Important:</p>
          <ul className='list-disc list-inside space-y-1 ml-2'>
            <li>Bookmark this page or save the download link</li>
            <li>
              You can download this pattern up to {initialPurchase.maxDownloads}{' '}
              times
            </li>
            <li>
              If you lose access, contact support with your order confirmation
              email
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
