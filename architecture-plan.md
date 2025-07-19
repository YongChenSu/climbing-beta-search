# Architecture Plan - Climbing Beta Aggregation

## Tech Stack Recommendation

### Frontend
- **Next.js 14+** with TypeScript
  - Server-side rendering for SEO
  - App Router for modern routing
  - Built-in optimization for images/videos
- **Tailwind CSS** for styling
- **Shadcn/ui** for UI components

### Backend
- **Next.js API Routes** (Full-stack approach)
- **Prisma ORM** for database management
- **PostgreSQL** as primary database

### Deployment
- **Vercel** (seamless Next.js deployment)
- **Vercel Postgres** for database hosting

## Project Structure
```
climbing-beta/
├── src/
│   ├── app/                 # Next.js 14 app directory
│   │   ├── api/            # API routes
│   │   ├── gyms/           # Gym pages
│   │   ├── routes/         # Route detail pages
│   │   └── search/         # Search functionality
│   ├── components/         # Reusable UI components
│   ├── lib/               # Utilities and database
│   └── types/             # TypeScript definitions
├── prisma/                # Database schema and migrations
├── public/                # Static assets
└── package.json
```

## Key Features
1. **Search by gym, section, grade**
2. **Filter by route difficulty**
3. **Instagram video embedding**
4. **Admin panel for content management**
5. **Mobile-responsive design**

## Phase 1: MVP
- Basic CRUD for gyms, sections, routes
- Manual beta video submission
- Simple search/filter interface