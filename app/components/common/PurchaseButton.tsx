'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

interface PurchaseButtonProps {
  patternSlug: string;
  price: number;
  title: string;
}

export default function PurchaseButton({
  patternSlug,
  price,
  title,
}: PurchaseButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePurchase = async () => {
    try {
      setLoading(true);
      setError(null);

      // Create checkout session
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patternSlug }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Redirect to Stripe Checkout using the URL
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (err) {
      console.error('Purchase error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='my-8 rounded-lg border border-gray-200 bg-gray-50 p-6'>
      <h3 className='mb-2 text-xl font-semibold'>
        Get the Printer-Friendly PDF
      </h3>
      <p className='mb-4 text-gray-600'>
        Download a beautifully formatted PDF version of this pattern for just{' '}
        <span className='font-semibold'>${(price / 100).toFixed(2)}</span>
      </p>

      {error && (
        <div className='mb-4 rounded bg-red-50 p-3 text-sm text-red-600'>
          {error}
        </div>
      )}

      <button
        onClick={handlePurchase}
        disabled={loading}
        className='w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50'
      >
        {loading ? 'Loading...' : `Purchase PDF - $${(price / 100).toFixed(2)}`}
      </button>
    </div>
  );
}
