# NoteHub — 09 Auth

A note management application built with Next.js App Router.  
This version adds authentication, protected routes, user profile pages, and cookie-based session handling.

## Repository

https://github.com/Larimar4you/09-auth

## Technologies

- Next.js
- React
- TypeScript
- Axios
- TanStack Query
- Zustand
- CSS Modules
- Vercel

## Features

- User registration
- User login
- User logout
- Cookie-based authentication
- Protected private routes
- Public auth routes
- User profile page
- Edit profile page
- Notes list with search, pagination, and tag filtering
- Note details page
- Create note page
- Draft saving with Zustand
- SSR and CSR support

## Project Structure

```txt
app/
  (auth routes)/
  (private routes)/
  api/
components/
lib/
  api/
  store/
types/


```

Environment Variables

Create .env.local in the project root:

NEXT_PUBLIC_API_URL=http://localhost:3000

For Vercel, set:

NEXT_PUBLIC_API_URL=https://your-project-name.vercel.app
Getting Started

Install dependencies:

npm install

Run development server:

npm run dev

Open:

http://localhost:3000
Available Scripts
npm run dev
npm run build
npm run start
npm run lint
Author

Larimar4you
