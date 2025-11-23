import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { PrismaClient } from '@prisma/client';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-11-17.clover',
});

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { patternSlug } = await request.json();

    // Get pattern from database
    const pattern = await prisma.pattern.findUnique({
      where: { slug: patternSlug },
    });

    if (!pattern) {
      return NextResponse.json({ error: 'Pattern not found' }, { status: 404 });
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: pattern.title,
              description: pattern.description || undefined,
            },
            unit_amount: pattern.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/purchase/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/patterns/${patternSlug}`,
      customer_email: undefined, // Let customer enter email
      metadata: {
        patternId: pattern.id,
        patternSlug: pattern.slug,
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 },
    );
  }
}
