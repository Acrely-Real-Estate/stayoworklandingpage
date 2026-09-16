# STAYO WorkStay

Premium B2B workforce accommodation infrastructure platform.

## Architecture

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Database**: Prisma ORM (PostgreSQL)
- **Authentication**: JWT via `jose` (HttpOnly Cookies)
- **Validation**: Zod
- **Typography**: Inter & Plus Jakarta Sans

## Environment Variables

Copy `.env.example` to `.env` and fill in the required values.

Required variables:
- `DATABASE_URL`: PostgreSQL connection string
- `JWT_SECRET`: Secure string for signing admin session tokens (min 32 chars)
- `ADMIN_EMAIL`: Initial admin login email (provisioning)
- `ADMIN_PASSWORD_HASH`: Initial admin password
- `NEXT_PUBLIC_SITE_URL`: The production URL (used for SEO metadata and sitemaps)

*Never commit `.env` containing production secrets.*

## Development

```bash
npm install
npm run dev
```

## Database Migration Workflow

For local development (when changing the schema in `prisma/schema.prisma`):
```bash
npx prisma migrate dev --name your_migration_name
```

For production deployment, run:
```bash
npx prisma migrate deploy
npx prisma generate
```

*(Note: Never use `prisma db push` on a production database.)*

## Internal CRM

The `/admin` route provides an internal CRM to manage workforce requirements submitted via the public contact form.

- **Authentication**: Required for all `/admin/*` routes. Enforced via Next.js Middleware and Server Component verification.
- **Data Source**: Uses real records from the `Enquiry` table.

## Production Build

```bash
npm run build
npm run start
```
