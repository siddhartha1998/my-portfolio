# Siddhiganesh Joshi | Software Engineer Portfolio

A premium, high-performance portfolio and blog built with **Next.js 16**, **Prisma 7**, and **Supabase**. Featuring a "Sleek Dark Glassmorphism" aesthetic, an integrated Admin Portal, and a dynamic MDX-powered blog.

## 🚀 Features

- **Premium Design**: Modern "Dark Glassmorphism" UI with smooth Framer Motion animations.
- **Dynamic Skills Marquee**: Infinite scrolling tech stack display inspired by top engineer portfolios.
- **Admin Portal**: Secure dashboard to manage blog posts, projects, and view visitor messages.
- **Supabase Integration**: Cloud-hosted database and secure authentication.
- **MDX Blog**: Lightning-fast technical articles with syntax highlighting.
- **Responsive Layout**: Optimized for all devices from mobile to desktop.
- **Docker Ready**: Multi-stage containerization for seamless deployment.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: Supabase (PostgreSQL)
- **ORM**: Prisma 7
- **Styling**: Vanilla CSS Modules (Glassmorphic Design System)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Auth**: Supabase SSR (Secure Admin Routes)

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- A Supabase Project

### 1. Clone the repository

```bash
git clone https://github.com/siddhartha1998/siddhiganesh-portfolio.git
cd siddhiganesh-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Supabase Keys
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Database Connections
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-ID].supabase.co:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-ID].supabase.co:5432/postgres"
```

### 4. Setup the Database

```bash
npx prisma db push
```

### 5. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 🐳 Docker Deployment

Build and run using Docker Compose:

```bash
docker-compose up -d --build
```

## 👤 Author

**Siddhiganesh Joshi**
- LinkedIn: [siddhiganesh-joshi](https://www.linkedin.com/in/siddhiganesh-joshi/)
- GitHub: [@siddhartha1998](https://github.com/siddhartha1998)
- Email: er.siddhartha1998@gmail.com

---
Built with ❤️ and Next.js.
