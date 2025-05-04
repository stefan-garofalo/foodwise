# Authentication

## Overview

The authentication system handles user identity, sessions, and access control
throughout the application. It uses Better Auth with Google OAuth provider for
secure authentication and session management.

## Data Models

Check better-auth docs on their db schema for more info.
(https://www.better-auth.com/docs/concepts/database#core-schema)

## Business Logic

### Authentication Flow

1. User initiates Google OAuth login
2. Better Auth handles OAuth flow
3. Account is created/linked to user
4. Session is created with expiration
5. Session token is stored in cookies

### Protected Routes

- All app functionality requires authentication
- Per page validation is in place to protect routes
- tRPC procedures use `authedProcedure` for access control
