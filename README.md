# Alyssa Dannielle Designs

A Next.js e-commerce site for selling crochet pattern PDFs with Stripe payment integration.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Database:** PostgreSQL (Neon)
- **ORM:** Prisma
- **Payment:** Stripe
- **Styling:** Tailwind CSS
- **Deployment:** Netlify

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (Neon account)
- Stripe account
- Stripe CLI installed ([installation guide](https://stripe.com/docs/stripe-cli))

### Environment Variables

Create a `.env.local` file in the root directory with the following:

```bash
# Database
DATABASE_URL="your-neon-postgres-connection-string"

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..." # Get this from Stripe CLI when testing locally
```

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd alyssa-dannielle-designs
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up the database**

   ```bash
   # Run migrations
   npx prisma migrate deploy

   # Generate Prisma Client
   npx prisma generate

   # Seed the database (optional)
   npm run seed
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

## Testing Stripe Payments Locally

To test the complete purchase flow locally, you need to forward Stripe webhooks to your local server:

1. **Start your dev server** (in one terminal)

   ```bash
   npm run dev
   ```

2. **Start Stripe webhook forwarding** (in a separate terminal)

   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

3. **Copy the webhook signing secret** that appears (starts with `whsec_`) and add it to your `.env.local`:

   ```bash
   STRIPE_WEBHOOK_SECRET=whsec_your_secret_here
   ```

4. **Restart your dev server** to pick up the new environment variable

5. **Use Stripe test cards** for purchases:
   - Success: `4242 4242 4242 4242`
   - Requires Authentication: `4000 0025 0000 3155`
   - Declined: `4000 0000 0000 9995`
   - Use any future expiration date and any 3-digit CVC

Keep both terminals running while testing purchases!

## Database Management

### View Database in Prisma Studio

```bash
npx prisma studio
```

### Create a New Migration

```bash
npx prisma migrate dev --name your_migration_name
```

### Reset Database (⚠️ destroys all data)

```bash
npx prisma migrate reset
```

## Project Structure

```
alyssa-dannielle-designs/
├── app/
│   ├── api/
│   │   ├── create-checkout/     # Stripe checkout session creation
│   │   ├── download/[id]/       # PDF download with tracking
│   │   └── webhooks/stripe/     # Stripe webhook handler
│   ├── components/
│   │   └── common/              # Shared components (ContactForm, etc.)
│   ├── layout/                  # Header, Footer components
│   ├── patterns/[slug]/         # Individual pattern pages
│   └── purchase/success/        # Post-purchase download page
├── prisma/
│   ├── schema.prisma            # Database schema
│   └── migrations/              # Database migrations
└── public/
    └── patterns/                # PDF files for patterns
```

## Key Features

- 🎨 **Pattern Catalog** - Browse and purchase crochet patterns
- 💳 **Stripe Integration** - Secure payment processing
- 📥 **Download Management** - Limited downloads (5 per purchase)
- 🌙 **Dark Mode** - Automatic theme switching
- 📧 **Contact Form** - Customer support via modal form
- 🔒 **Purchase Tracking** - Database-backed download limits

## Deployment

This site is deployed on Netlify. Make sure to:

1. Set all environment variables in Netlify dashboard
2. Add build command: `prisma migrate deploy && prisma generate && next build`
3. Set up Stripe webhook endpoint for production (use your Netlify URL)

## Troubleshooting

### Prisma Client Out of Sync

If you see errors about missing columns or fields:

```bash
npx prisma generate
```

### Webhooks Not Working Locally

Make sure:

- Stripe CLI is running (`stripe listen --forward-to localhost:3000/api/webhooks/stripe`)
- `STRIPE_WEBHOOK_SECRET` is set in `.env.local`
- Dev server was restarted after adding the webhook secret

### Purchase Not Showing After Payment

- Check that both terminals (dev server + Stripe CLI) are running
- Check the Stripe CLI terminal for webhook events
- The page auto-refreshes every 2 seconds for up to 20 seconds

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## Support

For issues or questions, use the contact form on the site or open an issue in this repository.
