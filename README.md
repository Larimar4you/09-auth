# NoteHub — Auth & Notes Management

A full-featured note management application built with Next.js App Router.
This version introduces authentication, protected routes, and user-specific data handling.

### 🔗 Repository

https://github.com/Larimar4you/09-auth

### 🛠 Tech Stack

Framework: Next.js (App Router)
Language: TypeScript
State Management: Zustand, TanStack Query
HTTP Client: Axios
Styling: CSS Modules
Deployment: Vercel

## Architecture Decisions

App Router (Next.js)

The project uses the App Router to leverage modern Next.js capabilities such as:

Server Components
Nested layouts
Clear separation of public and private routes

This improves scalability and aligns the project with current Next.js best practices.

Authentication via Cookies

Authentication is implemented using HTTP-only cookies instead of localStorage.

### Why:

More secure against XSS attacks
Automatically included in requests
Better suited for SSR
Separation of Public and Private Routes

The application structure clearly separates:

(auth routes) → public pages (login, registration)
(private routes) → protected user content

Why:

Improves maintainability
Simplifies access control
Makes routing logic predictable
State Management Strategy

The project uses a combination of:

Zustand → for local/global UI state (e.g. draft notes)
TanStack Query → for server state (data fetching, caching)

Why:

Clear separation of concerns
Avoids overloading one tool for all tasks
Scales better in real-world applications
API Layer Abstraction

API calls are abstracted in a dedicated layer (lib/api).

Why:

Keeps components clean
Centralizes request logic
Simplifies future changes (e.g. switching backend)
Type Safety with TypeScript

The entire project uses TypeScript.

Why:

Reduces runtime errors
Improves developer experience
Makes the codebase more maintainable
SSR + CSR Combination

### The project uses both:

Server-Side Rendering (SSR) for initial data load
Client-Side Rendering (CSR) for interactivity

Why:

Better performance
Improved SEO
Smooth user experience

## Project Structure

app/
(auth)/ # Public authentication routes (login, register)
(private)/ # Protected routes (user content)
api/ # API route handlers

components/ # Reusable UI components

lib/
api/ # API abstraction layer
store/ # Zustand global store

types/ # Shared TypeScript types

## Overview

NoteHub is a modern fullstack application that combines authentication with note management.
It demonstrates how to build scalable applications using the App Router architecture with both SSR and CSR.

### The project focuses on:

clean structure
state management
real-world authentication flow
Features
Authentication
User registration
User login & logout
Cookie-based session handling
Public & private route separation
Protected pages

👤 User
User profile page
Edit profile functionality

### Notes

Notes list
Search functionality
Pagination
Tag filtering
Note details page
Create note page
Draft saving (via Zustand)
🛠 Tech Stack
Framework: Next.js (App Router)
Language: TypeScript
State Management: Zustand, TanStack Query
HTTP Client: Axios
Styling: CSS Modules
Deployment: Vercel

## Environment Variables

Create a .env.local file in the root:

NEXT_PUBLIC_API_URL=http://localhost:3000

For production (Vercel):

NEXT_PUBLIC_API_URL=https://your-project-name.vercel.app

▶️ Getting Started
Install dependencies
npm install
Run development server
npm run dev

Open in browser:

http://localhost:3000

## Available Scripts

npm run dev # Development server
npm run build # Production build
npm run start # Run production build
npm run lint # Lint project

## Key Concepts Demonstrated

Authentication & authorization flow
Protected routing in Next.js App Router
Server-side & client-side rendering
Global state management with Zustand
Data fetching & caching with TanStack Query
Scalable project structure

## Future Improvements

OAuth (Google / GitHub)
Role-based access control
API error handling improvements
Unit & integration testing
UI/UX enhancements

## Author: Larimar4you
