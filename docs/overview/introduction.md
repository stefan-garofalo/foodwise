# Introduction

A personal web application to track food inventory, expiration dates, and manage
grocery shopping efficiently. The app helps prevent food waste by monitoring
expiration dates and suggesting recipes based on available ingredients.

## 🔐 Authentication & Security

- Google OAuth authentication
- Session-based access control
- Protected routes and API endpoints
- Secure user data management

## 🌍 Internationalization

- Multi-language support (English & Italian)
- Type-safe translation system
- Automatic language detection
- Cookie-based locale persistence

## 🗄️ Inventory Management

- Track food items with expiration dates and quantities
- Smart categorization system
- Leftovers management with "soon to expire" tracking
- Automated notifications for expiring items and low quantities

## 🍳 Recipe Management

- Intelligent recipe suggestions based on:
  - Available ingredients
  - Expiration dates
  - Course type and serving size
- Hybrid recipe system combining local database with AI-generated suggestions
- Automatic inventory updates when recipes are cooked
- Save and manage favorite recipes

## 🛒 Shopping List

- Dynamically generated based on inventory thresholds
- Manual item addition
- Automatic inventory updates upon purchase marking

## 💻 Technical Highlights

- Built with Next.js 15 and React 19
- Type-safe API with tRPC
- Real-time updates with React Query
- Turso cloud database with Drizzle ORM
- Better Auth for authentication
- Tailwind CSS with custom design system
- Full TypeScript implementation
- Monorepo architecture with Turborepo
