# PresentationForge

AI-powered presentation builder that helps you create professional slides quickly and easily.

## 🚀 Tech Stack

- **Next.js 15** - React framework
- **OpenAI** - AI content generation
- **Clerk** - Authentication
- **Prisma** - Database ORM
- **Neon** - PostgreSQL database
- **LemonSqueezy** - Payment processing

## 🛠️ Setup

### Prerequisites
- Node.js 18+
- npm/yarn/pnpm

### Environment Variables
Create a `.env.local` file:

```env
# Database
DATABASE_URL="your_neon_database_url"

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

# OpenAI
OPENAI_API_KEY="your_openai_api_key"

# LemonSqueezy
LEMONSQUEEZY_API_KEY="your_lemonsqueezy_api_key"
```

### Installation

```bash
# Clone the repo
git clone https://github.com/Avinashrkrk/PresentationForge.git
cd PresentationForge

# Install dependencies
npm install

# Setup database
npx prisma generate
npx prisma db push

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Status

🚧 **Currently in development** - Regular updates being pushed to main branch.

---
